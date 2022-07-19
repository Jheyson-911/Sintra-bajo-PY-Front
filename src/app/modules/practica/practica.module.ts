import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticaRoutingModule } from './practica-routing.module';
import { InformacionComponent } from './components/informacion/informacion.component';
import { ConvenioComponent } from './components/convenio/convenio.component';
import { DocumentoComponent } from './components/documento/documento.component';


@NgModule({
  declarations: [
    InformacionComponent,
    ConvenioComponent,
    DocumentoComponent
  ],
  imports: [
    CommonModule,
    PracticaRoutingModule
  ]
})
export class PracticaModule { }
