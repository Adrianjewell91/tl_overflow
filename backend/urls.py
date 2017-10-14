
from django.conf.urls import url,include
from django.contrib import admin
from rest_framework import routers

from documents import views

from django.contrib import admin
from django.contrib.auth import views as auth_views

import os

urlpatterns = [
    url(r'^logout/$', auth_views.logout, name='logout'),
    url(r'^login/$', auth_views.login, {'template_name': 'admin/login.html'}, name='login'),
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include('documents.urls')),
    url(r'^users/', include('accounts.urls',namespace='accounts',app_name='accounts')),
    url(r'^overflow',views.ReactAppView.as_view()),
]
