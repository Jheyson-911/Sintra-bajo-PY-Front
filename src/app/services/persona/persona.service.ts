import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private URL = 'https://sintra-bajo-pe.herokuapp.com/api/persona';

  constructor(private http:HttpClient) { }
  getPersonas(){
    return this.http.get(`${this.URL}`);
  }
}
