from django.urls import path

from .views import SectorListView, SectorDetailView

urlpatterns = [
    path('', SectorListView.as_view()),
    path('<pk>', SectorDetailView.as_view())
]