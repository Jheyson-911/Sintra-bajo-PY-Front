import { SolitudComponent } from './components/solitud/solitud.component';
import { PracticasComponent } from './components/practicas/practicas.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { AuthTokenGuard } from './../../guards/auth-token.guard';
import { ConvenioComponent } from './components/convenio/convenio.component';
import { DocumentoComponent } from './components/documento/documento.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Practicas'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'informacion'
      },
      {
        path: 'informacion',
        component: InformacionComponent,
        data: {
          title: 'Informacion'
        }
      },
      {
        path: 'documentos',
        component: DocumentoComponent
      },
      {
        path: 'convenios',
        component: ConvenioComponent
      },
      {
        path: 'evaluacion',
        component: EvaluacionComponent
      },
      {
        path: 'empresa',
        component: EmpresaComponent
      },
      {
        path: 'practicas',
        component: PracticasComponent
      },
      {
        path:'solicitudes',
        component: SolitudComponent
      }
    ],
    canActivate: [AuthTokenGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticaRoutingModule { }
