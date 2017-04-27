from rest_framework.viewsets import ModelViewSet

from .serializers import LineItemSerializer, EntitySerializer, \
    CampaignSerializer, ManagedObjectLogEntrySerializer, ManagedObjectSerializer
from .models import LineItem, Entity, Campaign, ManagedObject, ManagedObjectLogEntry


class LineItemViewSet(ModelViewSet):
    queryset = LineItem.objects.all()
    serializer_class = LineItemSerializer


class EntityViewSet(ModelViewSet):
    queryset = Entity.objects.all()
    serializer_class = EntitySerializer


class CampaignViewSet(ModelViewSet):
    queryset = Campaign.objects.all()
    serializer_class = CampaignSerializer


class ManagedObjectViewSet(ModelViewSet):
    queryset = ManagedObject.objects.all()
    serializer_class = ManagedObjectSerializer


class ManagedObjectLogEntryViewSet(ModelViewSet):
    queryset = ManagedObjectLogEntry.objects.all()
    serializer_class = ManagedObjectLogEntrySerializer
