# Generated by Django 2.2.1 on 2019-09-28 08:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0009_policedivision_pollingdivision'),
    ]

    operations = [
        migrations.CreateModel(
            name='PoliticalParty',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=36, unique=True)),
                ('party_type', models.CharField(blank=True, choices=[('REGISTERED_PARTY', 'Registered Party'), ('NON_REGISTERED_PARTY', 'Non Registered Party'), ('INDEPENDENT_GROUP', 'Independent Group')], max_length=50, null=True)),
                ('name', models.CharField(max_length=200)),
                ('sn_name', models.CharField(blank=True, max_length=200, null=True)),
                ('tm_name', models.CharField(blank=True, max_length=200, null=True)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ('id',),
            },
        ),
    ]
