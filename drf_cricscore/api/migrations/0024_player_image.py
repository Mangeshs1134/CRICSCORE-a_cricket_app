# Generated by Django 5.1.5 on 2025-01-23 16:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0023_playerperformance_matchplayed'),
    ]

    operations = [
        migrations.AddField(
            model_name='player',
            name='image',
            field=models.ImageField(null=True, upload_to=''),
        ),
    ]
