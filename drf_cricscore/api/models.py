from django.db import models

team = [
    ("INDIA","IND"),
    ("PAKISTAN","PAK"),
    ("AUSTRALIA","AUS"),
    ("SRI LANKA","SL"),
]
inning = [
    (0,0),
    (1,1),
    (2,2),
]


# Create your models here.

class Teams(models.Model):
    team = models.CharField(choices=team, max_length=20)
    logo = models.ImageField()

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
    team1OverPlayed = models.IntegerField(default=0)
    team2Score = models.IntegerField(default=0)
    team2FallenWickets = models.IntegerField(default=0)
    team2OverPlayed = models.IntegerField(default=0)
    # team1Image = models.CharField(Tea)
    date = models.CharField(max_length=20)
    venue = models.CharField(max_length=50)
    umpire = models.CharField(max_length=50)
    toss = models.ForeignKey(Teams, on_delete=models.CASCADE)
    inning = models.IntegerField(choices=inning)
    status = models.CharField(max_length=50)

    def team1_name(self):
        # print(self.team.get_team_display())
        return self.team1.get_team_display()
    def team1_image(self):
        return self.team1.logo.url

    def team2_name(self):
        return self.team2.get_team_display()
    def team2_image(self):
        return self.team2.logo.url
