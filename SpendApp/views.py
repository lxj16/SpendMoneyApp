from django.shortcuts import render
from django.http import HttpResponse
from .models import Product
# Create your views here.


def index(request):
    fund_total = 90000000000
    context = {'products': Product.objects.all(), 'fund_total': fund_total}
    return render(request, 'SpendApp/spend.html', context)
