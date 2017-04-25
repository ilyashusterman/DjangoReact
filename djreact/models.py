from __future__ import unicode_literals
from django.utils.encoding import smart_text
from django.db import models


# Create your models here.

class Entity(models.Model):
    type = models.CharField(max_length=50)
    entity_id = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return "Entity: {}".format(self.entity_id)


class ManagedObject(models.Model):
    type = models.CharField(max_length=50)
    object_id = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return "ManagedObject: {}".format(self.object_id)


class LineItem(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    entity_id = models.ForeignKey(Entity, on_delete=models.CASCADE, null=False)

    def __str__(self):
        return "Line_item: {}".format(self.name)


class Campaign(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    entity_id = models.ForeignKey(Entity, on_delete=models.CASCADE, null=False)

    def __str__(self):
        return "Campaign: {}".format(self.name)


class ManagedObjectLogEntry(models.Model):
    timestamp = models.DateTimeField()
    status = models.CharField(max_length=100)
    value = models.FloatField(blank=True, null=True)
    action_time = models.DateTimeField(auto_now=True)
    object_id = models.ForeignKey(ManagedObject, on_delete=models.CASCADE, null=False)
    change_message = models.TextField(blank=True)

    def __repr__(self):
        return smart_text(self.status)

    def __str__(self):
            return 'ManagedObjectLogEntry Added {} to {}'.format(self.action_time, self.object_id)
