import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AlbumListComponent } from './album-list/album-list.component';


const routes: Routes = [
    { path: './home/home.component', component: HomeComponent },
    { path: './about/about.component', component: AboutComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: './album-list/album-list.component', component: AlbumListComponent },
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes), 
        HttpClientModule
    ],
    exports: [
        RouterModule
    ],
})

export class AppRoutingModule { }