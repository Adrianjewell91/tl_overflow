# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from accounts.serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

from django.contrib.auth import login

import datetime

class UserCreate(APIView):
    """
    Creates the user.
    """
    def get(self, request, format='json'):
        y = datetime.datetime.now()
        y1 = y.replace(tzinfo=None)
        potential_user = User.objects.order_by('-last_login').first()
        x = potential_user.last_login
        x1 = x.replace(tzinfo=None)
        if ((y1-x1).total_seconds() < 360):
            login(request, potential_user)
            username = potential_user.username
            return Response({'username': username, 'token':"Put somethine here next"},
                         status=status.HTTP_201_CREATED)

        return Response("No current user", status=status.HTTP_400_BAD_REQUEST)

    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            new_user = User.objects.create(username=request.data['username'])
            new_user.set_password(request.data['password'])
            new_user.is_superuser = True
            new_user.is_staff = True
            new_user.save()
            login(request, new_user)
            token = Token.objects.create(user=new_user)
            json = serializer.data
            json['token'] = token.key

            return Response(json, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
