from rest_framework import serializers
from .models import LineItem, Entity, Campaign, ManagedObject, ManagedObjectLogEntry


class LineItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = LineItem


class CampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campaign


class EntitySerializer(serializers.ModelSerializer):
    line_items = LineItemSerializer(read_only=True, many=True)
    campaigns = CampaignSerializer(read_only=True, many=True)

    class Meta:
        model = Entity


class ManagedObjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = ManagedObject


class ManagedObjectLogEntrySerializer(serializers.ModelSerializer):
    manage_objects = ManagedObjectSerializer(read_only=True, many=True)

    class Meta:
        model = ManagedObjectLogEntry
