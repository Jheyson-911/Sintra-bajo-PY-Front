import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvenioService {
  private URL = 'http://localhost:8080/api/convenios';

  constructor( private http:HttpClient) { }

  getConvenios(){
    return this.http.get(`${this.URL}`);
  }

  createConvenio(convenio:any){
    return this.http.post(`${this.URL}`,convenio);
  }
  deleteConvenio(id:number){
    return this.http.delete(`${this.URL}/${id}`);
  }
}
