import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaRoutingModule } from './persona-routing.module';
import { DocenteComponent } from './components/docente/docente.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { UsuarioComponent } from './components/usuario/usuario.component';


@NgModule({
  declarations: [
    DocenteComponent,
    EstudianteComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    PersonaRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class PersonaModule { }
