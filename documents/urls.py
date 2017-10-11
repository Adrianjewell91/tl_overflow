# from django.conf.urls import url
from documents import views
from rest_framework import routers
from django.conf.urls import include, url

from rest_framework_nested import routers
# from views import DocumentViewSet, TranslationViewSet

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


# router = DefaultRouter()
router = routers.SimpleRouter()
router.register(r'documents', views.DocumentViewSet, base_name='documents')

documents_router = routers.NestedSimpleRouter(router, r'documents', lookup='document')
documents_router.register(r'translations', views.TranslationViewSet, base_name='translations')

translations_router = routers.NestedSimpleRouter(documents_router, r'translations', lookup='translation')
# translations_router.register(r'recipients', MailRecipientViewSet, base_name='recipients')

urlpatterns = [
    # '',
    url(r'^', include(router.urls)),
    url(r'^', include(documents_router.urls)),
    url(r'^', include(translations_router.urls))
]
