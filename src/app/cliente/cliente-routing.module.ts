import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './pages/crear-cliente/crear-cliente.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [

  { path: 'listado', component: ListadoComponent },
  { path: 'crear-cliente', component: CrearClienteComponent},
  { path: 'editar-cliente/:id', component: CrearClienteComponent },
  { path: '**', redirectTo: 'listado' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
