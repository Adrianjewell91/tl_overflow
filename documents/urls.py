from django.conf.urls import url
from documents import views
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'documents', views.DocumentViewSet)
router.register(r'translations', views.TranslationViewSet)
urlpatterns = router.urls
