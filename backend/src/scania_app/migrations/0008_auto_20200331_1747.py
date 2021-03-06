# Generated by Django 3.0.4 on 2020-03-31 17:47

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scania_app', '0007_auto_20200331_1604'),
    ]

    operations = [
        migrations.AddField(
            model_name='sector',
            name='education_cost_paid_per_capita',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(), default=(0, 0), size=None),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='sector',
            name='percentage_of_nine_grade_graduate',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.DecimalField(decimal_places=1, max_digits=5), default=(0.0, 0.0), size=None),
            preserve_default=False,
        ),
    ]
