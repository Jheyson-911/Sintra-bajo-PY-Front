import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private URL = 'http://localhost:8080/api/docente';

  constructor(private http:HttpClient) { }
  getDocentes(){
    return this.http.get(`${this.URL}`);
  }
  createDocente(docente:any){
    return this.http.post(`${this.URL}`,docente);
  }
  deleteDocente(id:number){
    return this.http.delete(`${this.URL}/${id}`);
  }
}
