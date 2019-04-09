import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../config/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }
  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/posts');
  }
  public getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`/api/details/${id}`);
  }
  public createPost(post: Post): Observable<void> {
    console.log(post);
    return this.http.post<void>('/api/posts', post);
  }
}
