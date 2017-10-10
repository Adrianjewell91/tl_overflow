from django.contrib import admin

# Register your models here.
from .models import Document
from .models import Translation

admin.site.register(Document)
admin.site.register(Translation)
