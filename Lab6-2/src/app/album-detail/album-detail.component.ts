import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post } from '../models';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  post!: Post;
  loaded: boolean = false;
  inputTitle: string = "";

  constructor(private route: ActivatedRoute,
    private postService: PostsService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if(params.get('id')) {
        const id = Number(params.get('id'));
        this.loaded = false;
        this.postService.getPost(id).subscribe((post) => {
          this.post = post;
          this.loaded = true;
        });
      }
    });
  }


  
  changeTitle() {
    this.postService.updateAlbum(this.post.id, this.inputTitle).subscribe((post) =>
      this.post.title = post.title
    );
    this.inputTitle = "";
  }
}
