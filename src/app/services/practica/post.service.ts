import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private URL = 'http://localhost:8080/api/post';

  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get(`${this.URL}`);
  }

  createPost(post:any){
    return this.http.post(`${this.URL}`,post);
  }

  deletePost(id:number){
    return this.http.delete(`${this.URL}/${id}`);
  }

}
