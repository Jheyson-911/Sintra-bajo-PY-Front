import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private URL = 'http://localhost:8080/api/empresa';

  constructor(private http:HttpClient) { }

  getEmpresas(){
    return this.http.get(`${this.URL}`);
  }

  createEmpresa(empresa:any){
    return this.http.post(`${this.URL}`,empresa);
  }

  deleteEmpresa(id:number){
    return this.http.delete(`${this.URL}/${id}`);
  }
}
