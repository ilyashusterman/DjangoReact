from rest_framework import serializers
from .models import LineItem, Entity


class LineItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = LineItem


class EntitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entity
