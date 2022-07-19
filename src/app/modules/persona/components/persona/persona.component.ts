import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { PersonaService } from './../../../../services/persona/persona.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  public personas: Array<any>= [];
  public EditPersona:Array<any>= [];
  public messageList:string = "";
  public messageCreate:string = "";
  public messageDelete:string = "";
  public messageUpdate:string = "";

  public personaSendForm: FormGroup = new FormGroup({});
  public personEditForm: FormGroup = new FormGroup({});

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    console.log(this.personaService.getPersonas().subscribe(
      (data:any)=>{
        console.log(data);
        this.messageList = data.message;
        this.personas = data.personas;
      }
    ));

    this.personaSendForm = new FormGroup({
      nombre: new FormControl(''),
      apellidoPaterno: new FormControl('',[Validators.required]),
      apellidoMaterno: new FormControl('',[Validators.required]),
      dni: new FormControl('',[Validators.required]),
      correo: new FormControl('',[Validators.required, Validators.email]),
      celular: new FormControl('',[Validators.required]),
    });

  }
  deletePerson(id:number){
    this.personaService.deletePersona(id).subscribe(
      (data:any)=>{
        console.log(data);
        this.messageDelete = data.message;
        this.personas = this.personas.filter(persona => persona.id != id);
      }
    )
  }
  createPerson(){
    this.personaService.createPersona(this.personaSendForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        this.messageCreate = data.message;
        this.personas.push(data.persona);
      }
    )
  }
  editPerson(persona:any){
    this.personaService.editPersona(persona).subscribe(
      (data:any)=>{
        console.log(data);
        this.messageUpdate = data.message;
        this.personas = this.personas
      }
    )
  }

  getPetsona(persona:any){
    console.log(persona);
    this.personEditForm = new FormGroup({
      nombre: new FormControl(persona.nombre),
      apellidoPaterno: new FormControl(persona.apellidoPaterno),
      apellidoMaterno: new FormControl(persona.apellidoMaterno),
      dni: new FormControl(persona.dni),
      correo: new FormControl(persona.correo),
      celular: new FormControl(persona.celular),
    });
  }
}
