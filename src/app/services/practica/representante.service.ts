import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepresentanteService {
  private URL = 'http://localhost:8080/api/representante';

  constructor(private http:HttpClient) { }

  getRepresentantes(){
    return this.http.get(`${this.URL}`);
  }

  createRepresentante(representante:any){
    return this.http.post(`${this.URL}`,representante);
  }

  deleteRepresentante(id:number){
    return this.http.delete(`${this.URL}/${id}`);
  }
}
