import {Component, OnInit} from '@angular/core';
import { VacancyService } from "../vacancy.service";
import { Vacancy } from '../models';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-companies-vacancies',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './companies-vacancies.component.html',
  styleUrl: './companies-vacancies.component.css'
})
export class CompaniesVacanciesComponent implements OnInit{
  loaded = false
  vacancies!: Vacancy[]
  constructor(private postService: VacancyService) {
  }

  ngOnInit(): void {
    this.loaded = false;
    this.postService.getVacancies().subscribe((vacancies) => {
      this.vacancies = vacancies;
      this.loaded = true;
    });
    }


}
