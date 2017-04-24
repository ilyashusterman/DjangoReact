from django.contrib import admin

# Register your models here.
from .models import LineItem, Entity

admin.site.register(LineItem)
admin.site.register(Entity)
