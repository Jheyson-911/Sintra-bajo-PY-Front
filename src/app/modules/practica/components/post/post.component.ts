import { PostService } from './../../../../services/practica/post.service';
import { HttpClient } from '@angular/common/http';
import { RepresentanteService } from './../../../../services/practica/representante.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public posts:Array<any> = [];
  public messageListPost: String='';
  public messageDeletePost: String='';
  public messageCreatePost: String='';
  public messageErrorPost: String='';

  public PostForm:FormGroup = new FormGroup({})

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.getPosts();

    this.PostForm = new FormGroup({
      titulo: new FormControl('', Validators.required),
      contenido: new FormControl('', Validators.required),
    });

  }

  getPosts(){
    this.postService.getPosts().subscribe(
      (data:any) => {
        this.messageListPost = data.message;
        this.posts = data.posts;
        console.log(data);
      }
    );
  }

  createPost(){
    this.postService.createPost(this.PostForm.value).subscribe(
      (data:any) => {
        this.messageCreatePost = data.message;
        this.posts.push(data.post);
      }
    );
  }

  deletePost(id:number){
    this.postService.deletePost(id).subscribe(
      (data:any) => {
        this.messageDeletePost = data.message;
        this.posts = this.posts.filter(post => post.id !== id);
      }
    );
  }

}
