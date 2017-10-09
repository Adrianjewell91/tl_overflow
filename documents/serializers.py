from rest_framework import serializers
from documents.models import Document

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ('id','title','body','language')
    # id=serializers.IntegerField(read_only=True)
    # title=serializers.CharField(required=False, allow_blank=True, max_length=100)
    # body=serializers.CharField(style={'base_template': 'textarea.html'})
    # language=serializers.CharField(required=False)
    #
    # def create(self,validated_data):
    #     return Document.objects.create(**validated_data)
    #
    # def update(self, instance, validated_data):
    #     instance.title=validated_data.get('title', instance.title)
    #     instance.body=validated_data.get('body', instance.body)
    #     instance.language=validated_data.get('language', instance.language)
    #     instance.save()
    #     return instance
