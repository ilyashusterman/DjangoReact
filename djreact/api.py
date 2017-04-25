from rest_framework.generics import ListAPIView

from .serializers import LineItemSerializer, EntitySerializer, \
    CampaignSerializer, ManagedObjectLogEntrySerializer, ManagedObjectSerializer
from .models import LineItem, Entity, Campaign, ManagedObject, ManagedObjectLogEntry


class LineItemApi(ListAPIView):
    queryset = LineItem.objects.all()
    serializer_class = LineItemSerializer


class EntityApi(ListAPIView):
    queryset = Entity.objects.all()
    serializer_class = EntitySerializer


class CampaignApi(ListAPIView):
    queryset = Campaign.objects.all()
    serializer_class = CampaignSerializer


class ManagedObjectApi(ListAPIView):
    queryset = ManagedObject.objects.all()
    serializer_class = ManagedObjectSerializer


class ManagedObjectLogEntryApi(ListAPIView):
    queryset = ManagedObjectLogEntry.objects.all()
    serializer_class = ManagedObjectLogEntrySerializer
