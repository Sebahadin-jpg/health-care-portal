from django.db import models

class Doctor(models.Model):
    name = models.CharField(max_length=120)
    specialty = models.CharField(max_length=120)
    location = models.CharField(max_length=120, blank=True)
    bio = models.TextField(blank=True)
    photo_url = models.URLField(blank=True)

    def __str__(self):
        return f"{self.name} — {self.specialty}"

class Service(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField(blank=True)
    icon = models.CharField(max_length=64, blank=True, help_text='Optional emoji or icon class')

    def __str__(self):
        return self.title

class Testimonial(models.Model):
    patient_name = models.CharField(max_length=120)
    content = models.TextField()
    location = models.CharField(max_length=120, blank=True)

    def __str__(self):
        return f"{self.patient_name} — {self.location}"

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    excerpt = models.TextField(blank=True)
    content = models.TextField()
    published_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Appointment(models.Model):
    patient_name = models.CharField(max_length=120)
    email = models.EmailField()
    phone = models.CharField(max_length=32, blank=True)
    doctor = models.ForeignKey(Doctor, on_delete=models.SET_NULL, null=True, blank=True)
    service = models.ForeignKey(Service, on_delete=models.SET_NULL, null=True, blank=True)
    date_time = models.DateTimeField()
    notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Appointment for {self.patient_name} on {self.date_time}" 
