# Generated by Django 3.0.4 on 2020-03-31 16:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('scania_app', '0006_auto_20200330_0327'),
    ]

    operations = [
        migrations.RenameField(
            model_name='sector',
            old_name='caretaker_per_child',
            new_name='children_per_caretaker',
        ),
        migrations.RenameField(
            model_name='sector',
            old_name='teacher_per_student',
            new_name='students_per_teacher',
        ),
    ]
