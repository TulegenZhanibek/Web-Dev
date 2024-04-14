import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent {

}
