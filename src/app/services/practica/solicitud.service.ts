import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private URL = 'http://localhost:8080/api/solicitud';

  constructor(private http:HttpClient) { }

  getSolicitudes(){
    return this.http.get(`${this.URL}`);
  }
  createSolicitud(solicitud:any){
    return this.http.post(`${this.URL}`,solicitud);
  }
  deleteSolicitud(id:number){
    return this.http.delete(`${this.URL}/${id}`);
  }
}
