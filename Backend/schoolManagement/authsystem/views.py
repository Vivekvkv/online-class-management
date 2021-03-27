from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def MyFirstView(request):
     return HttpResponse("Welcome To Django!!")
