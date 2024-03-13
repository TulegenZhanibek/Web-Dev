import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HomeComponent],
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'routing-app';
}
