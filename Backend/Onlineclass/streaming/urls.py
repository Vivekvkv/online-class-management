
from streaming import views
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework import routers

from django.conf.urls import url, include

urlpatterns=[
    path("home/" , views.index, name ='index'),
    path('video_feed', views.gen,name='video_feed')
]

urlpatterns = format_suffix_patterns(urlpatterns)