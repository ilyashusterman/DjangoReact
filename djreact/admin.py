from django.contrib import admin

# Register your models here.
from .models import LineItem, Entity, Campaign, ManagedObject, ManagedObjectLogEntry

admin.site.register(LineItem)
admin.site.register(Entity)
admin.site.register(Campaign)
admin.site.register(ManagedObject)
admin.site.register(ManagedObjectLogEntry)


