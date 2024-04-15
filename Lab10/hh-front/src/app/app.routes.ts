import { Routes } from '@angular/router';
import {CompanyListComponent} from "./company-list/company-list.component";
import {VacancyListComponent} from "./vacancy-list/vacancy-list.component";
import {HomeComponent} from "./home/home.component";
import {CompanyDetailComponent} from "./company-detail/company-detail.component";
import {VacancyDetailComponent} from "./vacancy-detail/vacancy-detail.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, title: 'Home'},
  {path: 'companies', component: CompanyListComponent, title: 'Company'},
  {path: 'companies/:id', component: CompanyDetailComponent, title: 'Company Detail'},
  {path: 'vacancies', component: VacancyListComponent, title: 'Vacancy'},
  {path: 'vacancies/:id', component: VacancyDetailComponent, title: 'Vacancy Detail'},
];

export class AppModule {}
