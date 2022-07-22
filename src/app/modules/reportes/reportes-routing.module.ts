import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Estadisticas'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'estudiantes'
      },
      {
        path: 'estudiantes',
        component: EstudiantesComponent,
        data: {
          title: 'Estadisticas'
        }
      },
      {
        path: 'resultados',
        component: EvaluacionComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
