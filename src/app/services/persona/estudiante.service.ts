import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private URL = 'http://localhost:8080/api/estudiante';
  constructor(private http:HttpClient) { }

  getEstudiantes(){
    return this.http.get(`${this.URL}`);
  }

  createEstudiante(estudiante:any){
    return this.http.post(`${this.URL}`,estudiante);
  }

  deleteEstudiante(id:number){
    return this.http.delete(`${this.URL}/${id}`);
  }
  editEstudiante(estudiante:any){
    return this.http.put(`${this.URL}/${estudiante._id}`,estudiante);
  }
  obtenerEstudiante(id:number){
    return this.http.get(`${this.URL}/${id}`);
  }
}
