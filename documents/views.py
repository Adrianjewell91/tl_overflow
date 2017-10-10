from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from documents.models import Document
from documents.serializers import DocumentSerializer

from documents.models import Translation
from documents.serializers import TranslationSerializer

@csrf_exempt
def document_list(request):
    """
    List all code document_list, or create a new document.
    """
    if request.method == 'GET':
        document_list = Document.objects.all()
        serializer = DocumentSerializer(document_list, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = DocumentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def document_detail(request, pk):
    """
    Retrieve, update or delete a code document.
    """
    try:
        document = Document.objects.get(pk=pk)
    except Document.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = DocumentSerializer(document)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = DocumentSerializer(document, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        document.delete()
        return HttpResponse(status=204)


@csrf_exempt
def translation_list(request):
    """
    List all code translation_list, or create a new translation.
    """
    if request.method == 'GET':
        translation_list = Translation.objects.all()
        serializer = TranslationSerializer(translation_list, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = TranslationSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def translation_detail(request, pk):
    """
    Retrieve, update or delete a code translation.
    """
    try:
        translation = Translation.objects.get(pk=pk)
    except Translation.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = TranslationSerializer(translation)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = TranslationSerializer(translation, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        translation.delete()
        return HttpResponse(status=204)
