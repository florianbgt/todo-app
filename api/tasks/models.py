from django.db import models
from django.contrib.auth import get_user_model


class Task(models.Model):
    name = models.CharField(max_length=50, unique=True)
    done = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name