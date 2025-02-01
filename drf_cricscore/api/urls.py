from django.urls import path, include
from rest_framework import routers
from . import views
from .views import NewsList, MatchList, TeamList, PlayerList, PlayerPerformanceList, CommentryList

router = routers.DefaultRouter()
router.register(r"match", MatchList)
router.register(r"teams", TeamList)
router.register(r"players", PlayerList)
router.register(r"performance", PlayerPerformanceList)
router.register(r"news", NewsList)
router.register(r"commentry", CommentryList)

urlpatterns = [
    path('', include(router.urls) ),
    path('dashboard', views.dashboard, name='dashboard' ),
    path('matchList/', views.matchList, name='matchList' ),
    path('register_match', views.upload_match_data, name='register_match' ),
    path('updateMatch/<int:matchId>', views.updateMatchData, name='updateMatch' ),
    path('updateMatch/addBowler/<int:matchId>', views.addBowler, name='addBowler' ),

]
