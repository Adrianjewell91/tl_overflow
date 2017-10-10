
from django.conf.urls import url,include
from django.contrib import admin
from rest_framework import routers
# from ./.documents.views import views

# router = routers.DefaultRouter()
# router.register(r'documents', views.DocumentViewSet)
# router.register(r'translations', views.TranslationViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('documents.urls'))
]
