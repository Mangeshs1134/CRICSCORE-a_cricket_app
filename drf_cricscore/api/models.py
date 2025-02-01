from django.db import models

team = [
    ("INDIA","IND"),
    ("PAKISTAN","PAK"),
    ("AUSTRALIA","AUS"),
    ("SRI LANKA","SL"),
    ('MI',"MI"),
    ('CSK',"CSK"),
    ('RCB','RCB')
]
live = [
    ("toBeStarted","toBeStarted"),
    ('live', 'live'),
    ('result', 'result'),
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
runs =[
    (-1,-1),
    (0,0),
    (1,1),
    (2,2),
    (3,3),
    (4,4),
    (6,6),
]
isBowling=[
    ('yes','yes'),
    ('no','no'),
]
commentryDefaults=[
    ( "That's a great shot. FOUR","four"),
    ("This is a HUUUGE SIX ","six" ),
    ("He didn't have clue How ball got swing in. Bowled ","bowled"),
    ("Nice Delivey from the Bowler ","dot"),
    (" That is a top spin from bowler ","spin" ),
    ( " This is Googly ","googly")
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

    def __str__(self):
        return f'{self.title}'

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
    live = models.CharField(choices=live,max_length=50, null=True)
    inning = models.IntegerField(choices=inning)
    status = models.CharField(max_length=50)
    team1extras = models.IntegerField(default=0)
    team2extras = models.IntegerField(default=0)
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
    ranking = models.IntegerField(default=0)

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
    def __str__(self):
        return f' {self.name}'
    
    def get_ranking(self):
        return self.name.ranking
    
    def get_role(self):
        return self.name.role

    def get_image(self):
        return self.name.image

    def get_team(self):
        return self.name.team if self.name else None
    
class Commentry(models.Model):
    ballNumber = models.IntegerField(default=0)
    defaultCommentry = models.CharField(choices=commentryDefaults,max_length=100, null=True)
    commentryText = models.CharField(max_length=200, null=True, default='')
    match = models.ForeignKey(Match, on_delete=models.CASCADE, related_name='matchCommentry')
    runs = models.IntegerField(choices=runs, default=0)
    batter = models.ForeignKey(Player, on_delete=models.CASCADE,related_name='batter', null=True)
    bowler = models.ForeignKey(Player, on_delete=models.CASCADE,related_name='bowler', null=True)

    def batter_name(self):
        return self.batter.name
    def bowler_name(self):
        return self.bowler.name
    def get_defaultCommentry(self):
        return  self.defaultCommentry
    def get_commentryText(self):
        return  self.get_commentryText_display
    
    def __str__(self):
        return f'{self.ballNumber} for matchId {self.match}'


   