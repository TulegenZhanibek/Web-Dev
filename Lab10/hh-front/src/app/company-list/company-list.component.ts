import {Component, OnDestroy, OnInit} from '@angular/core';
import {Company} from "../models";
import {CompanyService} from "../company.service";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {RouterLink, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit, OnDestroy{
  loaded = false
  companies!: Company[]

  constructor(private companyService: CompanyService) { }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.loaded = false;
    this.companyService.getCompanies().subscribe((companies) => {
      this.companies = companies;
      this.loaded = true;
    });
  }

  deleteCompany(id: number) {
    this.companies = this.companies.filter((company) => company.id != id);
    this.companyService.deleteCompany(id).subscribe(() => console.log('deleted'));
  }
}
