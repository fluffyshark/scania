from rest_framework import serializers

from scania_app.models import Sector

class SectorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sector
        fields = (
        'sector',
        'population', 
        'annual_target', 
        'tax_rate',
        'children_in_preschool',
        'elementary_students',
        'junior_high_students',
        'high_school_students',
        'expenses',
        'income',
        'population_total_yearly_income',
        'population_median_income',
        'university_educated_population',
        'pension_obligation',
        'newborns',
        'deaths',
        'immigration',
        'emmigration',
        'number_of_millioner_income_earners',
        'number_of_houses_sold',
        'average_house_prices',
        'unemployment',
        'students_per_teacher',
        'children_per_caretaker',
        'education_cost_paid_per_capita',
        'percentage_of_nine_grade_graduate'
        )