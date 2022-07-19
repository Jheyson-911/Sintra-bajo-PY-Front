import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private URL = 'https://sintra-bajo-pe.herokuapp.com/api/estudiante';
  constructor(private http:HttpClient) { }
  getEstudiantes(){
    return this.http.get(`${this.URL}`);
  }

}
