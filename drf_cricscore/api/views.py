from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import NewsSerializer, MatchSerializer, TeamSerializer
from .models import News, Match, Teams

# Create your views here.
class MatchList(ModelViewSet):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer

class TeamList(ModelViewSet):
    queryset = Teams.objects.all()
    serializer_class = TeamSerializer

class NewsList(ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
