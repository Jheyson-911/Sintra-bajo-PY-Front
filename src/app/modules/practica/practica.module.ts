import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticaRoutingModule } from './practica-routing.module';
import { InformacionComponent } from './components/informacion/informacion.component';
import { ConvenioComponent } from './components/convenio/convenio.component';
import { DocumentoComponent } from './components/documento/documento.component';
import { SolitudComponent } from './components/solitud/solitud.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { PracticasComponent } from './components/practicas/practicas.component';


@NgModule({
  declarations: [
    InformacionComponent,
    ConvenioComponent,
    DocumentoComponent,
    SolitudComponent,
    EmpresaComponent,
    EvaluacionComponent,
    PracticasComponent
  ],
  imports: [
    CommonModule,
    PracticaRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PracticaModule { }
