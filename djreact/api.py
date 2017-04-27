from rest_framework.generics import ListAPIView
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

    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        object_id = self.request.query_params.get('object_id', None)
        if object_id is not None:
            self.queryset = ManagedObjectLogEntry.objects.filter(object_id=object_id)
        return self.queryset


class ManagedObjectLog(ListAPIView):
    def get_queryset(self):
        """
        This view should return a list of all the LogEntry for
        the Managed Object
        """
        object_id = self.kwargs['object_id']
        return ManagedObjectLogEntry.objects.filter(object_id=object_id)
