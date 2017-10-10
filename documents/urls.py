from django.conf.urls import url
from documents import views
from rest_framework import routers

<<<<<<< HEAD
urlpatterns = [
    url(r'^documents$',views.document_list),
    url(r'^documents/(?P<pk>[0-9]+)$',views.document_detail)
]
=======
router = routers.SimpleRouter()
router.register(r'documents', views.DocumentViewSet)
router.register(r'translations', views.TranslationViewSet)
urlpatterns = router.urls

# urlpatterns = [
#     url(r'^documents/$',views.document_list),
#     url(r'^documents/(?P<pk>[0-9]+)/$',views.document_detail)
# ]
# urlpatterns += [
#     url(r'^translations/$',views.translation_list),
#     url(r'^translations/(?P<pk>[0-9]+)/$',views.translation_detail)
# ]
>>>>>>> d52c7de7c93e47bf803619074f6996acf66c4e5f
