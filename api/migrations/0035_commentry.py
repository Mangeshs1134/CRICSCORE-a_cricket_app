# Generated by Django 5.1.5 on 2025-01-24 19:20

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0034_alter_match_live'),
    ]

    operations = [
        migrations.CreateModel(
            name='Commentry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ballNumber', models.IntegerField(default=0)),
                ('commentryText', models.CharField(max_length=200)),
                ('runs', models.IntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3), (4, 4), (6, 6)], default=0)),
                ('match', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='matchCommentry', to='api.match')),
            ],
        ),
    ]
