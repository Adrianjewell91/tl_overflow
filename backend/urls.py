
from django.conf.urls import url,include
from django.contrib import admin
from rest_framework import routers

from documents import views

from django.contrib import admin
from django.contrib.auth import views as auth_views

urlpatterns = [
    url(r'^logout/$', auth_views.logout, name='logout'),
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include('documents.urls')),
    url(r'^users/', include('accounts.urls',namespace='accounts',app_name='accounts')),
    url(r'^login/', auth_views.login, {'template_name': 'admin/login.html'}, name='login'),
    url(r'^',views.ReactAppView.as_view()),
]

# /Users/adrian/repos/flex_project/tl_overflow/env/lib/python3.6/site-packages/rest_framework/templates/admin
