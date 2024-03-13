import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Albums } from '../app.albums';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: Albums[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAlbums();
  }

  fetchAlbums() {
    this.http.get<Albums[]>('https://jsonplaceholder.typicode.com/albums')
      .subscribe({
        next: (albums) => {
          this.albums = albums;
        },
        error: (error) => {
          console.error('Error fetching albums:', error);
        }
      });
  }

  deleteAlbum(index: number) {
    this.albums.splice(index, 1);
    // You would also send a DELETE request to the server to delete the album permanently
  }
}
