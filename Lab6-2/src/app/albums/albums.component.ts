import { Component, OnDestroy, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import { Post } from '../models';
import { POSTS } from '../fake-db';
import { RouterModule } from "@angular/router";
import { PostsService } from '../posts.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit, OnDestroy {
  posts!: Post[];
  // newPost: Post; 
  loaded: boolean = false;

  constructor(private postService: PostsService) {
    // this.newPost= {
    //   userId: 1,
    //   id: 0,
    //   title: ''
    // }
  }

  ngOnInit() {
    this.loaded = false;
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.loaded = true;
    });
  }

  deletePost(id: number) {
    this.posts = this.posts.filter((album) => album.id != id);
    this.postService.deletePost(id).subscribe(() => console.log("deleted"));
  }

  ngOnDestroy() {
  }
}
