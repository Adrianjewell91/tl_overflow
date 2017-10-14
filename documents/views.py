from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import View
from django.conf import settings
import os
from rest_framework import viewsets
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.parsers import JSONParser

from documents.models import Document
from documents.models import Translation
from documents.serializers import DocumentSerializer
from documents.serializers import TranslationSerializer


class DocumentViewSet(viewsets.ViewSet):
    serializer_class = DocumentSerializer

    def list(self, request,):
        document = Document.objects.filter()
        serializer = DocumentSerializer(document, many=True)
        return Response(serializer.data)

    def create(self, request,):
        document = Document.objects.filter()
        serializer = DocumentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        document = Document.objects.get(pk=pk)
        serializer = DocumentSerializer(document)
        return Response(serializer.data)

    def destroy(self, request, pk=None):
        document = Document.objects.get(pk=pk)
        serializer = DocumentSerializer(document)
        return Response(serializer.data)


class TranslationViewSet(viewsets.ViewSet):
    serializer_class = TranslationSerializer
    def list(self, request, document_pk=None):
        translations = Translation.objects.filter(document=document_pk)
        serializer = TranslationSerializer(translations, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None, document_pk=None):
        translation = Translation.objects.get(pk=pk, document=document_pk)
        serializer = TranslationSerializer(translation)
        return Response(serializer.data)

    def create(self, request, document_pk=None):
        # import pdb; pdb.set_trace()
        new = Translation(title=request.data['title'],
                          language=request.data['language'],
                          body=request.data['body'],
                          doc_id=document_pk,
                          document=Document.objects.get(pk=document_pk))
        new.save()
        serializer = TranslationSerializer(new)
        return Response(serializer.data, status=201)


# !!before using drf-nested-routers!!
# class DocumentViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed or edited.
#     """
#     queryset = Document.objects.all()
#     serializer_class = DocumentSerializer
#
#
# class TranslationViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows groups to be viewed or edited.
#     """
#     queryset = Translation.objects.all()
#     serializer_class = TranslationSerializer


# @csrf_exempt
# def document_list(request):
#     """
#     List all code document_list, or create a new document.
#     """
    # if request.method == 'GET':
    #     document_list = Document.objects.all()
    #     serializer = DocumentSerializer(document_list, many=True)
    #     return JsonResponse(serializer.data, safe=False)
#
#     elif request.method == 'POST':
#         data = JSONParser().parse(request)
#         serializer = DocumentSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=201)
#         return JsonResponse(serializer.errors, status=400)
#
# @csrf_exempt
# def document_detail(request, pk):
#     """
#     Retrieve, update or delete a code document.
#     """
#     try:
#         document = Document.objects.get(pk=pk)
#     except Document.DoesNotExist:
#         return HttpResponse(status=404)
#
#     if request.method == 'GET':
#         serializer = DocumentSerializer(document)
#         return JsonResponse(serializer.data)
#
#     elif request.method == 'PUT':
#         data = JSONParser().parse(request)
#         serializer = DocumentSerializer(document, data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data)
#         return JsonResponse(serializer.errors, status=400)
#
#     elif request.method == 'DELETE':
#         document.delete()
#         return HttpResponse(status=204)
#
# @csrf_exempt
# def translation_list(request):
#     """
#     List all code Translation_list, or create a new Translation.
#     """
#     if request.method == 'GET':
#         Translation_list = Translation.objects.all()
#         serializer = TranslationSerializer(Translation_list, many=True)
#         return JsonResponse(serializer.data, safe=False)
#
#     elif request.method == 'POST':
#         data = JSONParser().parse(request)
#         serializer = TranslationSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=201)
#         return JsonResponse(serializer.errors, status=400)
#
# @csrf_exempt
# def translation_detail(request, pk):
#     """
#     Retrieve, update or delete a code Translation.
#     """
#     try:
#         Translation = Translation.objects.get(pk=pk)
#     except Translation.DoesNotExist:
#         return HttpResponse(status=404)
#
#     if request.method == 'GET':
#         serializer = TranslationSerializer(Translation)
#         return JsonResponse(serializer.data)
#
#     elif request.method == 'PUT':
#         data = JSONParser().parse(request)
#         serializer = TranslationSerializer(Translation, data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data)
#         return JsonResponse(serializer.errors, status=400)
#
#     elif request.method == 'DELETE':
#         Translation.delete()
#         return HttpResponse(status=204)

class ReactAppView(View):
    def get(self, request):
        try:
            with open(os.path.join('frontend', 'build', 'index.html')) as file:
                return HttpResponse(file.read())

        except :
            return HttpResponse(
                """
                index.html not found ! build your React app !!
                """,
                status=501,
            )
