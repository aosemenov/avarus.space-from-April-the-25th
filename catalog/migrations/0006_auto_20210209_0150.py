# Generated by Django 3.0.10 on 2021-02-08 22:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0005_book_specifications'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Router',
        ),
        migrations.RemoveField(
            model_name='book',
            name='genre',
        ),
        migrations.RemoveField(
            model_name='book',
            name='isbn',
        ),
        migrations.AlterField(
            model_name='book',
            name='specifications',
            field=models.FileField(upload_to=''),
        ),
        migrations.DeleteModel(
            name='Genre',
        ),
    ]
