from django.db import models

# Create your models here.


class Product(models.Model):
    product_name = models.CharField(max_length=256, primary_key=True)
    unit_price = models.IntegerField()
    product_img_url = models.CharField(max_length=256, unique=True)

    def __str__(self):
        return self.product_name
