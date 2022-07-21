import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { PracticasComponent } from './components/practicas/practicas.component';


@NgModule({
  declarations: [
    EstudiantesComponent,
    PracticasComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
