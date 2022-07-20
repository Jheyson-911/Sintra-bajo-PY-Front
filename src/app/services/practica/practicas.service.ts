import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PracticasService {
  private URL = 'http://localhost:8080/api/practica';
  private url_estudaintes = 'http://localhost:8080/api/estudiante';

  constructor(private http:HttpClient) { }

  getPracticas(){
    return this.http.get(`${this.URL}`);
  }

  createPractica(practica:any){
    return this.http.post(`${this.URL}`,practica);
  }

  deletePractica(id:number){
    return this.http.delete(`${this.URL}/${id}`);
  }
  getEvaluaciones(id:number){
    return this.http.get(`${this.URL}/${id}/evaluaciones`);
  }
  // ?PRACTICAS DE TODOS LO ESTUDIANTES

  getPracticasEstudiantes(){
    return this.http.get(`${this.url_estudaintes}/practicas/completo`);
  }
}
