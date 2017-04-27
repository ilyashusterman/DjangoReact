"""DjangoReact URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from rest_framework.routers import DefaultRouter
from .api import LineItemViewSet, EntityViewSet, CampaignViewSet, ManagedObjectLogEntryViewSet, ManagedObjectViewSet

router = DefaultRouter()
router.register(r'entities', EntityViewSet)
router.register(r'line_items', LineItemViewSet)
router.register(r'campaigns', CampaignViewSet)
router.register(r'manage_objects', ManagedObjectViewSet)
router.register(r'log_entries', ManagedObjectLogEntryViewSet)
urlpatterns = router.urls
