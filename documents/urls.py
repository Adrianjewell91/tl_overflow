from documents import views
from rest_framework import routers
from rest_framework_nested import routers
from django.conf.urls import include, url



router = routers.DefaultRouter()

router.register(r'documents', views.DocumentViewSet, base_name='documents')
document_router = routers.NestedSimpleRouter(router, r'documents', lookup='document')

document_router.register(r'translations', views.TranslationViewSet, base_name='translations')
translations_router = routers.NestedSimpleRouter(document_router, r'translations', lookup='translation')

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^', include(document_router.urls)),
    url(r'^', include(translations_router.urls))
]

# !!before using drf-nested-routers!!
# router = routers.SimpleRouter()
# router.register(r'documents', views.DocumentViewSet)
# router.register(r'translations', views.TranslationViewSet)
# urlpatterns = router.urls
#
# urlpatterns = [
#     url(r'^documents/$',views.document_list),
#     url(r'^documents/(?P<pk>[0-9]+)/$',views.document_detail)
# ]
# urlpatterns += [
#     url(r'^translations/$',views.translation_list),
#     url(r'^translations/(?P<pk>[0-9]+)/$',views.translation_detail)
# ]
