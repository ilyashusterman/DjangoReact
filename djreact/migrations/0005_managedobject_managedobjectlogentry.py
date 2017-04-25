# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-04-25 14:51
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('djreact', '0004_campaign'),
    ]

    operations = [
        migrations.CreateModel(
            name='ManagedObject',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=50)),
                ('object_id', models.IntegerField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='ManagedObjectLogEntry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField()),
                ('status', models.CharField(max_length=100)),
                ('value', models.FloatField(blank=True, null=True)),
                ('action_time', models.DateTimeField(auto_now=True)),
                ('change_message', models.TextField(blank=True)),
                ('object_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='djreact.ManagedObject')),
            ],
        ),
    ]
