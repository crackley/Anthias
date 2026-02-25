from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('anthias_app', '0002_auto_20241015_1524'),
    ]

    operations = [
        migrations.AddField(
            model_name='asset',
            name='days_of_week',
            field=models.TextField(default='0,1,2,3,4,5,6'),
        ),
    ]
