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
  deletePersona(id:number){
    return this.http.delete(`${this.URL}/${id}`);
  }
  createPersona(persona:any){
    return this.http.post(`${this.URL}`,persona);
  }
  editPersona(persona:any){
    return this.http.put(`${this.URL}/${persona.id}`,persona);
  }
}
