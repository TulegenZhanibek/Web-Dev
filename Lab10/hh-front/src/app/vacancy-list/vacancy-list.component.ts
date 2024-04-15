import {Component, OnDestroy, OnInit} from '@angular/core';
import {Vacancy} from "../models";
import {VacancyService} from "../vacancy.service";
import {RouterLink, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})


export class VacancyListComponent implements OnInit, OnDestroy{
  loaded = false
  vacancies!: Vacancy[]

  constructor(private companyService: VacancyService) { }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.loaded = false;
    this.companyService.getVacancies().subscribe((vacancies) => {
      this.vacancies = vacancies;
      this.loaded = true;
    });
  }

  deleteVacancy(id: number) {
    this.vacancies = this.vacancies.filter((vacancy) => vacancy.id != id);
    this.companyService.deleteVacancy(id).subscribe(() => console.log('deleted'));
  }
}

