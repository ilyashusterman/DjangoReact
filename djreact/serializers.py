from rest_framework import serializers
from .models import LineItem, Entity, Campaign


class LineItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = LineItem


class CampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campaign


class EntitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entity
