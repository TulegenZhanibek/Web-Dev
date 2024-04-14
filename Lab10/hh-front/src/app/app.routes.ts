import { Routes } from '@angular/router';
import {CompanyListComponent} from "./company-list/company-list.component";
import {VacancyListComponent} from "./vacancy-list/vacancy-list.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, title: 'Home'},
  {path: 'companies', component: CompanyListComponent, title: 'Company'},
  {path: 'vacancy', component: VacancyListComponent, title: 'Vacancy'},
];

export class AppModule {}
