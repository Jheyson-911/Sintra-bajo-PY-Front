import { DocenteService } from './../../../../services/persona/docente.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.scss']
})
export class DocenteComponent implements OnInit {

  public docentes:Array<any> = [];
  public messageList: String='';
  public messageDelete: String='';
  public messageCreate: String='';
  public messageError: String='';

  public DocenteForm:FormGroup = new FormGroup({})

  constructor(private hhtp:HttpClient,private docenteService:DocenteService) { }

  ngOnInit(): void {
    this.getDocentes();

    this.DocenteForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      estado : new FormControl('', Validators.required),
      especialidad: new FormControl('', Validators.required),
    });
  }

  getDocentes(){
    this.docenteService.getDocentes().subscribe(
      (data:any) => {
        this.messageList = data.message;
        this.docentes = data.docentes;
      }
    );
  }

  createDocente(){
    this.docenteService.createDocente(this.DocenteForm.value).subscribe(
      (data:any) => {
        this.messageList = data.message;
        this.docentes.push(data.docente);
      }
    );
  }

  deleteDocente(id:number){
    this.docenteService.deleteDocente(id).subscribe(
      (data:any) => {
        this.messageDelete = data.message;
        this.docentes = this.docentes.filter(docente => docente.id !== id);
      }
    );
  }


}
