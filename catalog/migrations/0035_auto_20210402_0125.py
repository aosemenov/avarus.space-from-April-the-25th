# Generated by Django 3.0.10 on 2021-04-01 22:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0034_auto_20210402_0059'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='summary_en',
        ),
        migrations.RemoveField(
            model_name='book',
            name='summary_ru',
        ),
        migrations.RemoveField(
            model_name='book',
            name='title_en',
        ),
        migrations.RemoveField(
            model_name='book',
            name='title_ru',
        ),
        migrations.RemoveField(
            model_name='feedback',
            name='status_en',
        ),
        migrations.RemoveField(
            model_name='feedback',
            name='status_ru',
        ),
    ]
