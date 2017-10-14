from django.db import models

# Create your models here.
class Document(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    language = models.CharField(max_length=100, blank=True, default='')
    body = models.TextField()

    class Meta:
        ordering = ('created',)

class Translation(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    language = models.CharField(max_length=100, blank=True, default='')
    body = models.TextField()
    doc_id = models.CharField(max_length=10, blank=True, default='')
    document = models.ForeignKey(Document, related_name='translations', default='')

    class Meta:
        unique_together = ('document', 'created')
        ordering = ('created',)
