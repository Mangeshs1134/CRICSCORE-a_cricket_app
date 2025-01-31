from django import forms
from .models import *

class MatchForm(forms.ModelForm):
    
    class Meta:
        model = Match
        fields = '__all__'

class PlayerPerformanceForm(forms.ModelForm):
    
    class Meta:
        model = Match
        fields = '__all__'
        
