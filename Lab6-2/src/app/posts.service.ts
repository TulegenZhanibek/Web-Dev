import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post, AlbumPhoto } from "./models";



@Injectable({
    providedIn: 'root'
})

export class PostsService {

    constructor(private client: HttpClient) {
    }
  
    getPosts(): Observable<Post[]> {
      return this.client.get<Post[]>('https://jsonplaceholder.typicode.com/albums');
    }
    
    getPost(id: number): Observable<Post> {
      return this.client.get<Post>(`https://jsonplaceholder.typicode.com/albums/${id}`);
    }
    deletePost(id: number) {
      return this.client.delete<Post[]>(`https://jsonplaceholder.typicode.com/albums/${id}`);
    }
    updateAlbum(id: number, newTitle: string) {
      const payload = {title: newTitle};
      console.log(payload);
      return this.client.patch<Post>(`https://jsonplaceholder.typicode.com/albums/${id}`, payload);
    }
    getAlbumPhotos(id: number) {
      return this.client.get<AlbumPhoto[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
}