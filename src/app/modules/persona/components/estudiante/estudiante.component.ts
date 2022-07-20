import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EstudianteService } from './../../../../services/persona/estudiante.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent implements OnInit {

  public estudiantes:Array<any> = [];
  public messageList: String='';
  public messageDelete: String='';

  public EstudianteForm:FormGroup = new FormGroup({})

  constructor(private http:HttpClient, private estudianteService:EstudianteService) { }

  ngOnInit(): void {
    this.getEstudiantes();

    this.EstudianteForm = new FormGroup({
      codigo: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      nombres: new FormControl('', Validators.required),
      ciclo : new FormControl('', Validators.required),
      grupo: new FormControl('', Validators.required),
      dni: new FormControl('', Validators.required),
      estado_practicas: new FormControl('', Validators.required),
    });
  }

  getEstudiantes(){
    this.estudianteService.getEstudiantes().subscribe(
      (data:any) => {
        this.messageList = data.message;
        this.estudiantes = data.estudiantes;
        console.log(this.estudiantes);
      }
    );
  }


  createEstudiante(){
    this.estudianteService.createEstudiante(this.EstudianteForm.value).subscribe(
      (data:any) => {
        this.messageList = data.message;
        this.estudiantes.push(data.estudiante);



      }
    );
  }

deleteEstudiante(id:number){
  this.estudianteService.deleteEstudiante(id).subscribe(
    (data:any) => {
      this.messageDelete = data.message;
      this.estudiantes = this.estudiantes.filter(estudiante => estudiante._id !== id);
    }
  );
  }

}
