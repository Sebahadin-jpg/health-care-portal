from django.shortcuts import render, redirect
from django.urls import reverse
from .models import Doctor, Service, Testimonial, BlogPost
from .forms import AppointmentForm
from django.contrib import messages

def index(request):
    doctors = Doctor.objects.all()[:6]
    services = Service.objects.all()[:6]
    testimonials = Testimonial.objects.all()[:6]
    posts = BlogPost.objects.order_by('-published_at')[:3]
    form = AppointmentForm()
    context = {
        'doctors': doctors,
        'services': services,
        'testimonials': testimonials,
        'posts': posts,
        'form': form,
        'site_name': 'Moyo Health',
        'location': 'Nairobi, Kenya'
    }
    return render(request, 'index.html', context)

def book_appointment(request):
    if request.method == 'POST':
        form = AppointmentForm(request.POST)
        if form.is_valid():
            appt = form.save()
            messages.success(request, 'Appointment booked successfully. We will contact you to confirm.')
            return redirect(reverse('booking_success'))
        else:
            doctors = Doctor.objects.all()[:6]
            services = Service.objects.all()[:6]
            testimonials = Testimonial.objects.all()[:6]
            posts = BlogPost.objects.order_by('-published_at')[:3]
            return render(request, 'index.html', {
                'doctors': doctors,
                'services': services,
                'testimonials': testimonials,
                'posts': posts,
                'form': form,
            })
    return redirect(reverse('home'))

def booking_success(request):
    return render(request, 'appointments/booking_success.html')
