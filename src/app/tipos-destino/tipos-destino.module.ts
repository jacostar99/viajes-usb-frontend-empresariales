import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'


import { TiposDestinoRoutingModule } from './tipos-destino-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { CrearTideComponent } from './pages/crear-tide/crear-tide.component';


@NgModule({
  declarations: [
    ListadoComponent,
    CrearTideComponent
  ],
  imports: [
    CommonModule,
    TiposDestinoRoutingModule,
    FormsModule
  ]
})
export class TiposDestinoModule { }
