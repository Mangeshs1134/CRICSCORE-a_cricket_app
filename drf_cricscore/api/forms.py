from django import forms
from .models import *

class MatchForm(forms.ModelForm):
    
    class Meta:
        model = Match
        fields = '__all__'

class PlayerPerformanceForm(forms.ModelForm):
    
    class Meta:
        model = PlayerPerformance
        fields = '__all__'

    
class CommentaryForm(forms.ModelForm):
    class Meta:
        model = Commentry
        fields = '__all__'
 
class BowlerForm(forms.ModelForm):
    
    class Meta:
        model = PlayerPerformance
        fields = ['isBowling']
        
