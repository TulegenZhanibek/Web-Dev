import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'about', component: AboutComponent, title: 'About'},
    {path: 'albums', component: AlbumsComponent, title: 'Posts'},
    {path: 'posts/:id', component: AlbumDetailComponent, title: 'Post detail'},
    { path: 'posts/:id/photos', component: AlbumPhotosComponent, title: 'Photos'}
];


export class AppModule {}