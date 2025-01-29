from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import News, Match, Teams, Player, PlayerPerformance, Commentry

class MatchSerializer(ModelSerializer):
    team1_name = serializers.CharField(source='team1.get_team_display', read_only=True)
    team1_logo = serializers.ImageField(source='team1.logo', read_only=True)
    team2_name = serializers.CharField(source='team2.get_team_display', read_only=True)
    team2_logo = serializers.ImageField(source='team2.logo', read_only=True)
    get_batting = serializers.CharField(source='batting.get_team_display', read_only=True)
    class Meta:
        model = Match
        fields = '__all__'

class PlayerSerializer(MatchSerializer):
    team_name = serializers.CharField(source='team.get_team_display()', read_only=True)
    class Meta:
        model = Player
        fields = '__all__'

class PlayerPerformanceSerializer(MatchSerializer):
    get_team = serializers.CharField(source='name.team.get_team_display', read_only=True)
    get_name = serializers.CharField(source='name.name', read_only=True)
    get_role = serializers.CharField(source='name.role', read_only=True)
    get_ranking = serializers.IntegerField(source='name.ranking', read_only=True)
    get_image = serializers.ImageField(source='name.image', read_only=True)
    class Meta:
        model = PlayerPerformance
        fields = '__all__'

class TeamSerializer(ModelSerializer):
    class Meta:
        model = Teams
        fields = '__all__'
    
class NewsSerializer(ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'
    
class CommentrySerializer(ModelSerializer):
    batter_name = serializers.CharField(source='batter.name', read_only=True)
    bowler_name = serializers.CharField(source='bowler.name', read_only=True)
    get_defaultCommentry = serializers.CharField(source='self.defaultCommentry', read_only=True)
    class Meta:
        model = Commentry
        fields = '__all__'
