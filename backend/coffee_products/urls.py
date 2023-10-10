from django.urls import path
from . import views

urlpatterns = [
    path('coffee', views.coffee_list, name='coffee_list')
]