import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PracticasService {
  private URL = 'http://localhost:8080/api/practica';

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
  
}