import { PersonaService } from './../../../../services/persona/persona.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  public personas: Array<any>= [];
  public message:string = "";

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    console.log(this.personaService.getPersonas().subscribe(
      (data:any)=>{
        console.log(data);
        this.personas = data.personas;
      }
    ));
  }

}
