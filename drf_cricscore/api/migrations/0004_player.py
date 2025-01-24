# Generated by Django 5.1.5 on 2025-01-22 18:33

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_match_matchtitle_match_team1fallenwickets_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Player',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('role', models.CharField(choices=[('bat', 'bat'), ('ball', 'ball'), ('allround', 'allround'), ('wicketkeepar', 'wicketkeepar')], max_length=50)),
                ('runScored', models.IntegerField()),
                ('ballsPlayed', models.IntegerField()),
                ('fours', models.IntegerField()),
                ('sixes', models.IntegerField()),
                ('ballsBowled', models.IntegerField()),
                ('runsGiven', models.IntegerField()),
                ('maidenBowled', models.IntegerField()),
                ('wicketsTaken', models.IntegerField()),
                ('isOut', models.CharField(choices=[('out', 'out'), ('notOut', 'notOut'), ('onStrike', 'onStrike'), ('nonStrike', 'nonStrike')], max_length=50)),
                ('isBowling', models.CharField(choices=[('yes', 'yes'), ('no', 'no')], max_length=50)),
                ('team', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='playersTeam', to='api.teams')),
            ],
        ),
    ]
