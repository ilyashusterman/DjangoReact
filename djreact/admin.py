from django.contrib import admin

# Register your models here.
from .models import LineItem, Entity, Campaign

admin.site.register(LineItem)
admin.site.register(Entity)
admin.site.register(Campaign)

