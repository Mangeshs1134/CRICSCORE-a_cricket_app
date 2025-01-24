from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import NewsSerializer, MatchSerializer, TeamSerializer, PlayerSerializer,PlayerPerformanceSerializer
from .models import News, Match, Teams, Player, PlayerPerformance

# Create your views here.
class MatchList(ModelViewSet):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer

class TeamList(ModelViewSet):
    queryset = Teams.objects.all()
    serializer_class = TeamSerializer

class PlayerList(ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

class PlayerPerformanceList(ModelViewSet):
    queryset = PlayerPerformance.objects.all()
    serializer_class = PlayerPerformanceSerializer

class NewsList(ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
