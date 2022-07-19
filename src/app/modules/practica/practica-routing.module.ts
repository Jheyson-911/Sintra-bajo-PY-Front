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
