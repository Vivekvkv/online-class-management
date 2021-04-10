from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework import routers
from django.conf.urls import url, include
from authsystem import views


urlpatterns = [
          path('profile/', views.ProfileView.as_view()),
          path('register/', views.RegisterView.as_view(), name='auth_register'),
          path('login/',views.MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
          


]

urlpatterns = format_suffix_patterns(urlpatterns)
