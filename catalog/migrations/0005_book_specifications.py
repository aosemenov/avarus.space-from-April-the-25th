# Generated by Django 3.0.10 on 2021-02-02 21:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0004_router'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='specifications',
            field=models.FileField(default=1, upload_to='router_specifications'),
            preserve_default=False,
        ),
    ]
