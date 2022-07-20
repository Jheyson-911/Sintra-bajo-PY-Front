import { PracticasService } from './../../../../services/practica/practicas.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicas',
  templateUrl: './practicas.component.html',
  styleUrls: ['./practicas.component.scss']
})
export class PracticasComponent implements OnInit {

  public practicas:Array<any> = [];
  public messageListPractica: String='';
  public messageDeletePractica: String='';
  public messageCreatePractica: String='';
  public messageErrorPractica: String='';

  public PracticaForm:FormGroup = new FormGroup({})

  constructor(private practicaService:PracticasService) { }

  ngOnInit(): void {
    this.getPracticas();

    this.PracticaForm = new FormGroup({
      fecha_inicio: new FormControl('',[Validators.required]),
      fecha_fin: new FormControl('',[Validators.required]),
      horas: new FormControl('',[Validators.required]),
      estado: new FormControl('',[Validators.required]),
      tblEstudianteId: new FormControl('',[Validators.required]),
    });
  }

  getPracticas(){
    this.practicaService.getPracticas().subscribe(
      (data:any) => {
        this.messageListPractica = data.message;
        this.practicas = data.practicas;
      }
    )
  }

  createPractica(){
    this.practicaService.createPractica(this.PracticaForm.value).subscribe(
      (data:any) => {
        this.messageCreatePractica = data.message;
        this.practicas.push(data.practicas);
      }
    )
  }

  deletePractica(id:number){
    this.practicaService.deletePractica(id).subscribe(
      (data:any) => {
        this.messageDeletePractica = data.message;
        this.practicas = this.practicas.filter(practica => practica.id !== id);
        this.getPracticas();
      }
    )
  }

}
