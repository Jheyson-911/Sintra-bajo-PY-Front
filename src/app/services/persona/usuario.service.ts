import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL = 'http://localhost:8080/api/usuario';
  private register = 'http://localhost:8080/api/auth/register';

  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get(`${this.URL}`);
  }
  createUser(usuario:any){
    return this.http.post(`${this.register}`,usuario);
  }
}
