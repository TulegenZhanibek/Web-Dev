import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vacancy} from "./models";
import {Observable} from "rxjs";
import {VacancyTopTenComponent} from "./vacancy-top-ten/vacancy-top-ten.component";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  private apiUrl= 'http://localhost:8000/'
  constructor(private client: HttpClient) { }

  getVacancies(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.apiUrl}api/vacancies/`);
  }

  getVacanciesTopTen(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.apiUrl}api/vacancies/top_ten/ `)
  }

  getCompaniesVacancies(id: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.apiUrl}api/companies/${id}/vacancies/`)
  }
  getVacancy(id: number): Observable<Vacancy> {
    return this.client.get<Vacancy>(`${this.apiUrl}api/vacancies/${id}/`);
  }
  deleteVacancy(id: number,) {
    return this.client.delete<any>(`${this.apiUrl}api/vacancies/${id}/`);
  }
  updateVacancy(id: number, newTitle: string) {
    const payload = {title: newTitle};
    console.log(payload);
    return this.client.patch<Vacancy>(`https://jsonplaceholder.typicode.com/albums/${id}/`, payload);
  }
}
