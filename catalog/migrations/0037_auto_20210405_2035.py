# Generated by Django 3.0.10 on 2021-04-05 17:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0036_auto_20210402_0137'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='specifications',
            field=models.FileField(upload_to='upload_datasets'),
        ),
    ]
