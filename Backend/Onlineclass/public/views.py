from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView

class PublicView(APIView):

    def get(self, request, format=None):
        content = {
            'wesg': 'welcome To FUll stack Development' # `django.contrib.auth.User` instance.
        }
        return Response(content)