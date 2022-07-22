import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { PracticasComponent } from './components/practicas/practicas.component';
import { PracticasEstudianteComponent } from './components/practicas-estudiante/practicas-estudiante.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';

@NgModule({
  declarations: [
    EstudiantesComponent,
    PracticasComponent,
    PracticasEstudianteComponent,
    EvaluacionComponent,
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
