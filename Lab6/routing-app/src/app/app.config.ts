import { ApplicationConfig } from '@angular/core';
import { Route, provideRouter } from '@angular/router';

import { Routes } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';

export const routes: Routes = [
  {
    path: 'album-list',
    component: AlbumListComponent,
  },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
