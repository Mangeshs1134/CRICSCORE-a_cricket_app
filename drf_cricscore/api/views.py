from django.shortcuts import render, redirect, get_object_or_404
from rest_framework.viewsets import ModelViewSet
from .serializers import NewsSerializer, MatchSerializer, TeamSerializer, PlayerSerializer,PlayerPerformanceSerializer, CommentrySerializer
from .models import News, Match, Teams, Player, PlayerPerformance, Commentry
from .forms import *
from django.forms import modelformset_factory
from django.urls import reverse

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
    try:
        current_bowler = PlayerPerformance.objects.filter(matchPlayed=matchId, isBowling='yes').first()
    except:
        current_bowler = None
    if current_bowler == None :
        return redirect(reverse('addBowler', args=[matchId]))
    try:
        strike_batter = PlayerPerformance.objects.filter(matchPlayed=matchId, isOut='onStrike').first()
    except:
        strike_batter = None
    if strike_batter == None :
        return redirect(reverse('Batter', args=[matchId]))
    
    nonStrike_batter = PlayerPerformance.objects.filter(matchPlayed=matchId, isOut='nonStrike').first()
    if nonStrike_batter == None :
        return redirect(reverse('Batter', args=[matchId]))
    print(nonStrike_batter, strike_batter, current_bowler)

    if request.method == 'POST':
        match_form = MatchForm(request.POST, instance=match, prefix='match')
        striker_form = PlayerPerformanceForm(request.POST, instance=strike_batter, prefix='striker') 
        nonStriker_form = PlayerPerformanceForm(request.POST, instance=nonStrike_batter, prefix='nonStriker') 
        bowler_form = PlayerPerformanceForm(request.POST, instance=current_bowler, prefix='bowler') 
        commentry_form = CommentaryForm(request.POST)
        
        if match_form.is_valid() :
            # match = match_form.save(commit=False)
            match_form.save()
        if striker_form.is_valid():
            striker_form.save()
        if nonStriker_form.is_valid():
            nonStriker_form.save()

        if bowler_form.is_valid():
            bowler_form.save()
        if commentry_form.is_valid():
            commentry_form.save()

        return redirect(reverse("updateMatch", args=[matchId]))    

    else:
        form = MatchForm(instance=match, prefix='match')
        striker_form = PlayerPerformanceForm(instance=strike_batter, prefix='striker')
        nonStriker_form = PlayerPerformanceForm(instance=nonStrike_batter, prefix='nonStriker')
        bowler_form = PlayerPerformanceForm(instance=current_bowler, prefix='bowler')
        commentry_form = CommentaryForm(initial={'match':matchId})

        
        
    return render(request, 'updateMatch.html', 
        {'form':form,
         "strikerForm":striker_form,
         "nonStrikerForm":nonStriker_form,
         "bowlerForm":bowler_form, 
         'commentryForm' : commentry_form,
          })

def addBowler(request, matchId):
    PlayerPerformanceFormSet = modelformset_factory(PlayerPerformance, fields=('name','isBowling',), extra=0)
    players = PlayerPerformance.objects.filter(matchPlayed=matchId)
    if request.method=='POST':
        formset = PlayerPerformanceFormSet(request.POST, queryset=players)
        if formset.is_valid():
            print("testing")
            formset.save()
            return redirect(reverse("updateMatch", args=[matchId]))
        else:
            print("Formset errors:", formset.errors)


    else:
        formset = PlayerPerformanceFormSet(queryset=players)
        return render(request, 'addBowler.html', {"formset": formset})