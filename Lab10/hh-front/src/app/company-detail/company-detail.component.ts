import { Component } from '@angular/core';
import {Company} from "../models";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {CompanyService} from "../company.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent {
  companies!: Company;
  loaded: boolean = false;
  inputName: string = "";

  constructor(private route: ActivatedRoute,
    private postService: CompanyService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if(params.get('id')) {
        const id = Number(params.get('id'));
        this.loaded = false;
        this.postService.getCompany(id).subscribe((companies) => {
          this.companies = companies;
          this.loaded = true;
        });
      }
    });
  }



  changeTitle() {
    this.postService.updateCompany(this.companies.id, this.inputName).subscribe((post) =>
      this.companies.description = post.description
    );
    this.inputName = "";
  }
}
