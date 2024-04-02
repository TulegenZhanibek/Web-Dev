from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from .models import Product, Category

def get_products(request):
    products = Product.objects.all()
    data = [{'id': product.id, 'name': product.name, 'price': product.price, 'description': product.description, 'count': product.count, 'is_active': product.is_active} for product in products]
    return JsonResponse(data, safe=False)

def get_product(request, id):
    product = get_object_or_404(Product, pk=id)
    data = {'id': product.id, 'name': product.name, 'price': product.price, 'description': product.description, 'count': product.count, 'is_active': product.is_active}
    return JsonResponse(data)

def get_categories(request):
    categories = Category.objects.all()
    data = [{'id': category.id, 'name': category.name} for category in categories]
    return JsonResponse(data, safe=False)

def get_category(request, id):
    category = get_object_or_404(Category, pk=id)
    data = {'id': category.id, 'name': category.name}
    return JsonResponse(data, safe=False)

def get_category_products(request, id):
    category = get_object_or_404(Category, pk=id)
    products = category.products.all()
    data = [{'id': product.id, 'name': product.name, 'price': product.price, 'description': product.description, 'count': product.count, 'is_active': product.is_active} for product in products]
    return JsonResponse(data, safe=False)

