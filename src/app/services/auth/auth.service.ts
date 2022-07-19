import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://sintra-bajo-pe.herokuapp.com/api/auth';

  constructor(private http:HttpClient) { }
  login(user:any){
    return this.http.post(`${this.URL}/login`,user);
  }
}
