from rest_framework.generics import ListAPIView

from .serializers import LineItemSerializer, EntitySerializer
from .models import LineItem, Entity

class LineItemApi(ListAPIView):
    queryset = LineItem.objects.all()
    