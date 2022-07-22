import { EstudianteService } from './../../../../services/reportes/estudiante.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {
  public EstNoIniciado : Array<any>= [];
  public EstProceso : Array<any>= [];
  public EstFinalizado : Array<any>= [];

  constructor(private reporteService:EstudianteService) { }

  ngOnInit(): void {
    this.getEstudiantesInicio();
    this.getEstudiantesProceso();
    this.getEstudiantesFinalizado();
  }

  getEstudiantesInicio(){
    this.reporteService.getNoIniciados().subscribe(
      (data:any)=>{
        this.EstNoIniciado = data.estudiantes;
      }
    )
  }

  getEstudiantesProceso(){
    this.reporteService.getProceso().subscribe(
      (data:any)=>{
        this.EstProceso = data.estudiantes;
        console.log(this.EstProceso);
      }
    )
  }
  getEstudiantesFinalizado(){
    this.reporteService.getFinalizado().subscribe(
      (data:any)=>{
        this.EstFinalizado = data.estudiantes;
      }
    )
  }

}
