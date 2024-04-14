from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    city = models.CharField(max_length=100)
    address = models.CharField(max_length=100)

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = "Companies"
    def __str__(self):
        return f"name: {self.name} | description: {self.description} | city: {self.city} | adress: {self.address}"

class Vacancy(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="vacancies")

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = "Vacancies"

    def __str__(self):
        return f"name: {self.name} | description: {self.description} | salary: {self.salary}"