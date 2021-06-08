import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'


import { ClienteRoutingModule } from './cliente-routing.module';
import { CrearClienteComponent } from './pages/crear-cliente/crear-cliente.component';
import { ListadoComponent } from './pages/listado/listado.component';


@NgModule({
  declarations: [
    CrearClienteComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule
  ]
})
export class ClienteModule { }
