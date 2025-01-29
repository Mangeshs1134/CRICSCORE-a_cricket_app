from django.contrib import admin
from .models import Match,News,Teams,Player,PlayerPerformance, Commentry


# Register your models here.
@admin.register(Match)
class MatchAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Match._meta.fields]
@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = [field.name for field in News._meta.fields]
@admin.register(Teams)
class TeamsAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Teams._meta.fields]
@admin.register(Player)
class PlayerAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Player._meta.fields]
@admin.register(PlayerPerformance)
class PlayerAdmin(admin.ModelAdmin):
    list_display = [field.name for field in PlayerPerformance._meta.fields]
@admin.register(Commentry)
class CommentryAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Commentry._meta.fields]

