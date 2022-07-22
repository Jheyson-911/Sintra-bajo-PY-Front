import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private URL = 'http://localhost:8080/api/estudiante';

  constructor(private http:HttpClient) { }

  getNoIniciados(){
    return this.http.get(this.URL + '/reportes/noiniciado');
  }

  getProceso(){
    return this.http.get(this.URL + '/reportes/proceso');
  }
  getFinalizado(){
    return this.http.get(this.URL + '/reportes/finalizado');
  }
}
