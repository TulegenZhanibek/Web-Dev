import {Component, OnDestroy, OnInit} from '@angular/core';
import {Vacancy} from "../models";
import {VacancyService} from "../vacancy.service";
import {RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-vacancy-top-ten',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgIf
  ],
  templateUrl: './vacancy-top-ten.component.html',
  styleUrl: './vacancy-top-ten.component.css'
})
export class VacancyTopTenComponent implements OnInit, OnDestroy {
  loaded = false
  vacancies!: Vacancy[]

  constructor(private vacancyService: VacancyService) { }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.loaded = false;
    this.vacancyService.getVacanciesTopTen().subscribe((vacancies) => {
      this.vacancies = vacancies;
      this.loaded = true;
    });
  }
}
