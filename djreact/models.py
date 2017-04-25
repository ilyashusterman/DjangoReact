from __future__ import unicode_literals

from django.db import models


# Create your models here.

class Entity(models.Model):
    type = models.CharField(max_length=50)
    entity_id = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return "Entity: {}".format(self.entity_id)


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
