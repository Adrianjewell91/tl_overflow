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

class UserCreate(APIView):
    """
    Creates the user.
    """
    def post(self, request, format='json'):
        # import pdb; pdb.set_trace()
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            new_user = User.objects.create(username=request.data['username'],
                                           email=request.data['email'])
            new_user.set_password(request.data['password'])
            new_user.is_staff = True
            new_user.is_superuser = True
            new_user.save()

            token = Token.objects.create(user=new_user)
            json = serializer.data
            json['token'] = token.key

            return Response(json, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
