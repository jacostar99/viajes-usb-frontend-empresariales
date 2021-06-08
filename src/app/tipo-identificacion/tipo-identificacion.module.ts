import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { TipoIdentificacionRoutingModule } from './tipo-identificacion-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { CrearTipoIdComponent } from './pages/crear-tipo-id/crear-tipo-id.component';


@NgModule({
  declarations: [
    ListadoComponent,
    CrearTipoIdComponent
  ],
  imports: [
    CommonModule,
    TipoIdentificacionRoutingModule,
    FormsModule
  ]
})
export class TipoIdentificacionModule { }
