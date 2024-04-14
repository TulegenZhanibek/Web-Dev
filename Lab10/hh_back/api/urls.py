from django.urls import path

from .views.cbv import CompanyListApiView, CompanyDetailApiView, CompanyVacanciesApiView
from .views.cbv import VacancyListApView, VacancyDetailApiView, VacancyTopTenApiView

urlpatterns = [
    path("companies/", CompanyListApiView.as_view()),
    path("companies/<int:id>/", CompanyDetailApiView.as_view()),
    path("companies/<int:id>/vacancies/", CompanyVacanciesApiView.as_view()),
    path("vacancies/", VacancyListApView.as_view()),
    path("vacancies/<int:id>/", VacancyDetailApiView.as_view()),
    path("vacancies/top_ten/", VacancyTopTenApiView.as_view()),
]
