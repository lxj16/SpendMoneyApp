from django.shortcuts import render
from django.http import HttpResponse
from .models import Product
# Create your views here.


def index(request):
    product_name = Product.objects.all()
    product_dict = {'product': product_name}
    return render(request, 'SpendApp/index.html', context={product_dict})
