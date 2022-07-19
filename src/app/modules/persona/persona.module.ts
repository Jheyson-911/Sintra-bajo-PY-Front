import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaRoutingModule } from './persona-routing.module';
import { PersonaComponent } from './components/persona/persona.component';
import { DocenteComponent } from './components/docente/docente.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { UsuarioComponent } from './components/usuario/usuario.component';


@NgModule({
  declarations: [
    PersonaComponent,
    DocenteComponent,
    EstudianteComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    PersonaRoutingModule
  ]
})
export class PersonaModule { }
