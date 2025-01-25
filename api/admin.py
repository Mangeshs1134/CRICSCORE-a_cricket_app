from django.contrib import admin
from .models import Match,News,Teams


# Register your models here.
@admin.register(Match)
class MatchAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Match._meta.fields]

    # class Meta:
    #     model = Match
    #     fields = '__all__'
    # list_display = '__all__'
        
    
# @admin.register(News)
# @admin.register(Teams)
