from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import News, Match, Teams

class MatchSerializer(ModelSerializer):
    team1_name = serializers.CharField(source='team1.get_team_display', read_only=True)
    team1_logo = serializers.ImageField(source='team1.logo', read_only=True)
    team2_name = serializers.CharField(source='team2.get_team_display', read_only=True)
    team2_logo = serializers.ImageField(source='team2.logo', read_only=True)
    class Meta:
        model = Match
        fields = '__all__'

class TeamSerializer(ModelSerializer):
    class Meta:
        model = Teams
        fields = '__all__'
    
class NewsSerializer(ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'
