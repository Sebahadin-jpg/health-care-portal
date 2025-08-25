from django.contrib import admin
from .models import Doctor, Service, Testimonial, BlogPost, Appointment

@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ('name', 'specialty', 'location')
    search_fields = ('name', 'specialty', 'location')

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title',)

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('patient_name', 'location')

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'published_at')
    prepopulated_fields = {"slug": ("title",)}

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('patient_name', 'date_time', 'doctor', 'service', 'created_at')
    list_filter = ('doctor', 'service')
    search_fields = ('patient_name', 'email', 'phone')
