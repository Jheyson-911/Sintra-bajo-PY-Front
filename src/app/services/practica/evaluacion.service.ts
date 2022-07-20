import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {
  private URL = 'http://localhost:8080/api';

  constructor(private htpp:HttpClient) { }


  getEvaluaciones(){
    return this.htpp.get(`${this.URL}/evaluacion`);
  }
  createEvaluacion(evaluacion:any){
    return this.htpp.post(`${this.URL}/evaluacion`,evaluacion);
  }

  deleteEvaluacion(id:number){
    return this.htpp.delete(`${this.URL}/evaluacion/${id}`);
  }

  getItems(){
    return this.htpp.get(`${this.URL}/item`);
  }

  createItem(item:any){
    return this.htpp.post(`${this.URL}/item`,item);
  }

  deleteItem(id:number){
    return this.htpp.delete(`${this.URL}/item/${id}`);
  }

  getContenidoItems(){
    return this.htpp.get(`${this.URL}/contenidoitem`);
  }
  createContenidoItem(contenidoItem:any){
    return this.htpp.post(`${this.URL}/contenidoitem`,contenidoItem);
  }
  deleteContenidoItem(id:number){
    return this.htpp.delete(`${this.URL}/contenidoitem/${id}`);
  }
}