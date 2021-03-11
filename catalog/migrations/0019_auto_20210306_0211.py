# Generated by Django 3.0.10 on 2021-03-05 23:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0018_auto_20210306_0143'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedback',
            name='description',
            field=models.CharField(max_length=120, null=True, verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='feedback',
            name='email',
            field=models.EmailField(max_length=120, null=True, verbose_name='eMail'),
        ),
        migrations.AlterField(
            model_name='feedback',
            name='organization',
            field=models.CharField(max_length=120, null=True, verbose_name='Organization'),
        ),
        migrations.AlterField(
            model_name='feedback',
            name='position',
            field=models.CharField(max_length=120, null=True, verbose_name='Position'),
        ),
    ]
