# Generated by Django 5.1.5 on 2025-01-23 17:03

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0026_remove_teams_isbatting_match_batting'),
    ]

    operations = [
        migrations.AlterField(
            model_name='match',
            name='batting',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='batting_team', to='api.teams'),
        ),
    ]
