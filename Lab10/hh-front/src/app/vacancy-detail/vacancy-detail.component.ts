import { Component } from '@angular/core';
import {Vacancy} from "../models";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {VacancyService} from "../vacancy.service";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-vacancy-detail',
  standalone: true,
  imports: [FormsModule, NgIf, RouterLink],
  templateUrl: './vacancy-detail.component.html',
  styleUrl: './vacancy-detail.component.css'
})
export class VacancyDetailComponent {
  vacancies!: Vacancy;
  loaded: boolean = false;
  inputName: string = "";

  constructor(private route: ActivatedRoute,
    private postService: VacancyService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if(params.get('id')) {
        const id = Number(params.get('id'));
        this.loaded = false;
        this.postService.getVacancy(id).subscribe((vacancies) => {
          this.vacancies = vacancies;
          this.loaded = true;
        });
      }
    });
  }



  changeTitle() {
    this.postService.updateVacancy(this.vacancies.id, this.inputName).subscribe((post) =>
      this.vacancies.description = post.description
    );
    this.inputName = "";
  }
}
