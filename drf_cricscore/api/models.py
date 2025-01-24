from django.db import models

team = [
    ("INDIA","IND"),
    ("PAKISTAN","PAK"),
    ("AUSTRALIA","AUS"),
    ("SRI LANKA","SL"),
]
position =[
    (1,1),(2,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10),(11,11)
]
inning = [
    (0,0),
    (1,1),
    (2,2),
]
role = [
    ('bat','bat'),
    ('ball','ball'),
    ('allround','allround'),
    ('wicketkeepar','wicketkeepar'),
]
isOut = [
    ('notOut', 'notOut'),
    ('out', 'out'),
    ('onStrike', 'onStrike'),
    ('nonStrike', 'nonStrike'),
]
isBowling=[
    ('yes','yes'),
    ('no','no'),
]

# Create your models here.

class Teams(models.Model):
    team = models.CharField(choices=team, max_length=20)
    logo = models.ImageField()
    # isBatting = models.BooleanField(default=False)
    # isBowling = models.BooleanField(default=False)
    
    

    def __str__(self):
        return self.team


class News(models.Model):
    title = models.CharField(max_length=100)
    date = models.CharField(max_length=30)
    content = models.CharField(max_length=500)
    image = models.ImageField(upload_to='news/')

class Match(models.Model):
    team1 = models.ForeignKey(Teams, on_delete=models.CASCADE, related_name='team1')
    team2 = models.ForeignKey(Teams, on_delete=models.CASCADE, related_name='team2')
    matchTitle = models.CharField(max_length=50, default='Match Title ')
    team1Score = models.IntegerField(default=0)
    team1FallenWickets = models.IntegerField(default=0)
    team1BallsPlayed = models.IntegerField(default=0)
    team2Score = models.IntegerField(default=0)
    team2FallenWickets = models.IntegerField(default=0)
    team2BallsPlayed = models.IntegerField(default=0)
    date = models.CharField(max_length=20)
    venue = models.CharField(max_length=50)
    umpire = models.CharField(max_length=50)
    toss = models.ForeignKey(Teams, on_delete=models.CASCADE)
    inning = models.IntegerField(choices=inning)
    status = models.CharField(max_length=50)
    # Define the batting choices as team1 or team2
    batting = models.ForeignKey(
        Teams, 
        on_delete=models.SET_NULL, 
        null=True, 
        related_name='batting_team'
    )

    def get_batting(self):
        return self.batting.get_team_display()

 

    def __str__(self):
        return f'{self.team1.team} vs {self.team2.team} id {self.id}'

    def team1_name(self):
        return self.team1.get_team_display()
    def team1_image(self):
        return self.team1.logo.url

    def team2_name(self):
        return self.team2.get_team_display()
    def team2_image(self):
        return self.team2.logo.url
    
class Player(models.Model):
    name = models.CharField(max_length=50, default='name')
    image = models.ImageField(null=True)
    role = models.CharField(choices=role, max_length=50)
    team = models.ForeignKey(Teams, on_delete=models.CASCADE, related_name='playersTeam')
    favPosition = models.IntegerField(choices=position, default=1)

    def __str__(self):
        return self.name
    def team_name(self):
        return self.team.get_team_display()
    

class PlayerPerformance(models.Model):
    name = models.ForeignKey(Player, on_delete=models.CASCADE,null=True, blank=True,  related_name='nameOfPlayer')
    matchPlayed = models.ForeignKey(Match, on_delete=models.CASCADE, default=1 ,related_name='matchesPlayed')
    positionPlayed = models.IntegerField(choices=position, default=1)
    runScored = models.IntegerField(default=0)
    ballsPlayed = models.IntegerField(default=0)
    fours = models.IntegerField(default=0)
    sixes = models.IntegerField(default=0)
    ballsBowled = models.IntegerField(default=0)
    runsGiven = models.IntegerField(default=0)
    maidenBowled = models.IntegerField(default=0)
    wicketsTaken = models.IntegerField(default=0)
    isOut = models.CharField(choices=isOut, max_length=50)
    isBowling = models.CharField(choices=isBowling, max_length=50)

    def get_name(self):
        return self.name.name

    def get_team(self):
        return self.name.team if self.name else None

   