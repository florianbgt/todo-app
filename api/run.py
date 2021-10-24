import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','_project.settings')

import django
django.setup()

from django.core.management import call_command
from django.conf import settings

from django.contrib.auth.models import User

if __name__ == "__main__":
    try:
        os.remove(settings.DATABASES['default']['NAME'])
    except:
        print('db does not exists, skip deletion')
    call_command("migrate", interactive=False)
    if not User.objects.filter(username='admin').exists():
        User.objects.create_superuser(
            username='admin',
            email='',
            password='testpass123',
        )