import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company, Vacancy} from "./models";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  private apiUrl = 'http://127.0.0.1:8000'
  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.apiUrl);
  }
}
