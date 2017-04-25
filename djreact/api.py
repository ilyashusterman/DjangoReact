from rest_framework.generics import ListAPIView

from .serializers import LineItemSerializer, EntitySerializer, CampaignSerializer
from .models import LineItem, Entity, Campaign


class LineItemApi(ListAPIView):
    queryset = LineItem.objects.all()
    serializer_class = LineItemSerializer


class EntityApi(ListAPIView):
    queryset = Entity.objects.all()
    serializer_class = EntitySerializer


class CampaignApi(ListAPIView):
    queryset = Campaign.objects.all()
    serializer_class = CampaignSerializer
