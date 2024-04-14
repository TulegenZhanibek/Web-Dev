from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response


from ..models import Company, Vacancy
from ..serializers import CompanySerializer, VacancySerializer


class CompanyListApiView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)

        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CompanyDetailApiView(APIView):
    def get_object(self, id):
        try:
            company = Company.objects.get(id=id)
            return company
        except Company.DoesNotExist as e:
            return None

    def get(self, request, id):
        company = self.get_object(id)

        if company is None:
            return Response({"error": "Company not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = CompanySerializer(company)
        return Response(serializer.data)

    def put(self, request, id):
        company = self.get_object(id)

        if company is None:
            return Response({"error": "Company not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        company = self.get_object(id)

        if company is None:
            return Response({"error": "Company not found"}, status=status.HTTP_404_NOT_FOUND)

        company.delete()
        return Response({"deleted": True})


class CompanyVacanciesApiView(APIView):
    def get(self, request, id):
        try:
            company = Company.objects.get(id=id)
        except Company.DoesNotExist as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        vacancies = Vacancy.objects.filter(company=company)
        serializer = VacancySerializer(vacancies, many=True)

        return Response(serializer.data)


class VacancyListApView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)

        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VacancyDetailApiView(APIView):
    def get_object(self, id):
        try:
            vacancy = Vacancy.objects.get(id=id)
            return vacancy
        except Vacancy.DoesNotExist as e:
            return e

    def get(self, request, id):
        vacancy = self.get_object(id)
        serializer = VacancySerializer(vacancy)

        if vacancy is None:
            return Response({"error": "Company not found"}, status=status.HTTP_404_NOT_FOUND)

        return Response(serializer.data)

    def put(self, request, id):
        vacancy = self.get_object(id=id)
        serializer = VacancySerializer(instance=vacancy, data=request.data)

        if vacancy is None:
            return Response({"error": "Company not found"}, status=status.HTTP_404_NOT_FOUND)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):

        vacancy = self.get_object(id)
        if vacancy is None:
            return Response({"error": "Company not found"}, status=status.HTTP_404_NOT_FOUND)
        vacancy.delete()
        return Response({"deleted": True})


class VacancyTopTenApiView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.order_by("-salary")[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
