from django.shortcuts import render
from django.http.response import StreamingHttpResponse

import cv2 , os , urllib.request
import numpy as np
from django.conf import settings

# Create your views here.
def index(request):
    return render(request,'index.html')

def gen(request):
    cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)
    while(True):
        success , image = cap.read()
        cv2.flip(image,1)
        cv2.imshow('Live video streaming',image)
        
        if cv2.waitKey(1)& 0xFF==ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()



 

 
        

