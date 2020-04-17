from rest_framework.generics import ListAPIView, RetrieveAPIView

from scania_app.models import Sector
from .serializers import SectorSerializer

class SectorListView(ListAPIView):
    queryset = Sector.objects.all()
    serializer_class = SectorSerializer

class SectorDetailView(RetrieveAPIView):
    queryset = Sector.objects.all()
    serializer_class = SectorSerializer