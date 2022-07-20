import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:8080/api/auth';

  constructor(private http:HttpClient) { }
  login(user:any){
    return this.http.post(`${this.URL}/login`,user);
  }
}
