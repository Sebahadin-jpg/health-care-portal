from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('appointments/book/', views.book_appointment, name='book_appointment'),
    path('appointments/success/', views.booking_success, name='booking_success'),
]
