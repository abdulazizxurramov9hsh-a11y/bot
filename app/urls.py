from django.urls import path
from .views import home_page, photos_page, about_page, services_page, contact_page

urlpatterns = [
    path('', home_page, name='home'),
    path('photos/', photos_page, name='photos'),
    path('about/', about_page, name='about'),
    path('services/', services_page, name='services'),
    path('contact/', contact_page, name='contact'),
]