import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL = 'https://sintra-bajo-pe.herokuapp.com/api/usuario';

  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get(`${this.URL}`);
  }
}
