import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Company, Vacancy} from "./models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiUrl= 'http://localhost:8000/'
  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(`${this.apiUrl}api/companies/`);
  }
  getCompany(id: number): Observable<Company> {
    return this.client.get<Company>(`${this.apiUrl}api/companies/${id}/`);
  }
  deleteCompany(id: number,) {
    return this.client.delete<any>(`${this.apiUrl}api/companies/${id}/`);
  }
  updateCompany(id: number, newTitle: string) {
    const payload = {title: newTitle};
    console.log(payload);
    return this.client.patch<Company>(`https://jsonplaceholder.typicode.com/albums/${id}/`, payload);
  }
}
