import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SolicitudService } from './../../../../services/practica/solicitud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solitud',
  templateUrl: './solitud.component.html',
  styleUrls: ['./solitud.component.scss']
})
export class SolitudComponent implements OnInit {

  public solicitudes:Array<any> = [];
  public messageList: String='';
  public messageDelete: String='';
  public messageCreate: String='';
  public messageError: String='';

  public SolicitudForm:FormGroup = new FormGroup({})

  constructor(private solicitudService:SolicitudService) { }

  ngOnInit(): void {
    this.getSolicitud();

    this.SolicitudForm = new FormGroup({
      nombre_empresa: new FormControl('', Validators.required),
      nombre_dirigido: new FormControl('', Validators.required),
      cargo_dirigido: new FormControl('', Validators.required),
      estado_solicitud: new FormControl('', Validators.required),
    });
  }

  getSolicitud(){
    this.solicitudService.getSolicitudes().subscribe(
      (data:any) => {
        this.messageList = data.message;
        this.solicitudes = data.solicitudes;
        console.log(data);
      }
    );
  }

  createSolicitud(){
    this.solicitudService.createSolicitud(this.SolicitudForm.value).subscribe(
      (data:any) => {
        this.messageList = data.message;
        this.solicitudes.push(data.solicitud);
      }
    );
  }
  deleteSolicitud(id:number){
    this.solicitudService.deleteSolicitud(id).subscribe(
      (data:any) => {
        this.messageList = data.message;
        this.solicitudes = data.solicitudes;
      }
    );
  }

}
