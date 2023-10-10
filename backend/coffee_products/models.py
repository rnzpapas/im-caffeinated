from django.db import models

# Create your models here.
class Coffee(models.Model):
    coffee_name = models.CharField(max_length=40)
    coffee_price = models.IntegerField()