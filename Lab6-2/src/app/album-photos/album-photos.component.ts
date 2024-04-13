import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlbumPhoto } from '../models';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  albumPhotos!: AlbumPhoto[];
  loaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private albumService: PostsService
    ){
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if(params.get('id')) {
        const albumId = Number(params.get('id'));
        this.loaded = false;
        console.log(albumId);
        this.albumService.getAlbumPhotos(albumId).subscribe((albumPhotos) => {
          this.albumPhotos = albumPhotos;
          this.loaded = true;
          console.log(albumPhotos[0].title)
        }
        )
      }
    })
  }

}
