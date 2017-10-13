
from django.conf.urls import url,include
from django.contrib import admin
from rest_framework import routers

from documents import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^', include('documents.urls')),
    url(r'^users/', include('accounts.urls',namespace='accounts',app_name='accounts')),
    url(r'^overflow/',views.ReactAppView.as_view()),
]
