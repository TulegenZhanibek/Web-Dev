import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { AlbumListComponent } from '../album-list/album-list.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, AlbumListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  title = 'routing-app';
}
