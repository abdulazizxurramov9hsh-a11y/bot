from django.shortcuts import render

def home_page(request):
    return render(request, 'index.html')

def photos_page(request):
    return render(request, 'photos.html')

def about_page(request):
    return render(request, 'about.html')

def services_page(request):
    return render(request, 'services.html')

def contact_page(request):
    return render(request, 'contact.html')