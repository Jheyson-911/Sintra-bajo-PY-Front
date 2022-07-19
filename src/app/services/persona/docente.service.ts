import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private URL = 'https://sintra-bajo-pe.herokuapp.com/api/docente';

  constructor(private http:HttpClient) { }
  getDocentes(){
    return this.http.get(`${this.URL}`);
  }
}
