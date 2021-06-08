import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { DestinosRoutingModule } from './destinos-routing.module';
import { CrearDestinoComponent } from './pages/crear-destino/crear-destino.component';
// import { DetalleDestinoComponent } from './pages/detalle-destino/detalle-destino.component';
import { ListadoComponent } from './pages/listado/listado.component';


@NgModule({
  declarations: [
    CrearDestinoComponent,
    // ConsultarDestinoComponent,
    // DetalleDestinoComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    DestinosRoutingModule,
    FormsModule
  ]
})
export class DestinosModule { }
