from django.shortcuts import render, redirect, get_object_or_404
from rest_framework.viewsets import ModelViewSet
from .serializers import NewsSerializer, MatchSerializer, TeamSerializer, PlayerSerializer,PlayerPerformanceSerializer, CommentrySerializer
from .models import News, Match, Teams, Player, PlayerPerformance, Commentry
from .forms import *
from django.forms import modelformset_factory

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

class CommentryList(ModelViewSet):
    queryset = Commentry.objects.all()
    serializer_class = CommentrySerializer

def dashboard(request):
    return render(request, 'dashboard.html')

def matchList(request):
    matches = Match.objects.all()
    return render(request, 'matchList.html', {'matches':matches})

def upload_match_data(request):
    if request.method == 'POST':
        match_form = MatchForm(request.POST)
        if match_form.is_valid():
            match = match_form.save()
        return render(request, 'dashboard.html')
    else:
        form = MatchForm()

    return render(request, 'registerMatch.html', {'form':form})

def updateMatchData(request, matchId):
    match = get_object_or_404(Match, pk= matchId)
    bowler = get_object_or_404(PlayerPerformance, isBowling='yes', matchPlayed=matchId)
    if request.method == 'POST':
        match_form = MatchForm(request.POST, instance=match)
        # formset = playerPerformaceFormSet(request.POST)
        bowler_form = PlayerPerformanceForm(request.POST, instance=bowler)
        if match_form.is_valid() and bowler_form.is_valid():
            match = match_form.save()
            bowler = bowler_form.save()
        form = MatchForm(instance=match)
        
    else:
        form = MatchForm(instance=match)
        # sets = PlayerPerformance.objects.all()
        # for set in sets:
        #     print(set)
 
        

        
    return render(request, 'updateMatch.html', {'form':form})

