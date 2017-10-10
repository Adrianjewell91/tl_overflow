from rest_framework import serializers
from documents.models import Document
from documents.models import Translation

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ('id','title','body','language')


class TranslationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ('id','title','body','language')
