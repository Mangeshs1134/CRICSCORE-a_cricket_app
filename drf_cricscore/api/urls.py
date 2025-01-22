from django.urls import path, include
from rest_framework import routers
from .views import NewsList, MatchList, TeamList

router = routers.DefaultRouter()
router.register(r"match", MatchList)
router.register(r"teams", TeamList)
router.register(r"news", NewsList)

urlpatterns = [
    path('', include(router.urls) ),
]
