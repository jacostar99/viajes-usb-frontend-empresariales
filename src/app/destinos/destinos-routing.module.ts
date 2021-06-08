import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearDestinoComponent } from './pages/crear-destino/crear-destino.component';
// import { DetalleDestinoComponent } from './pages/detalle-destino/detalle-destino.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [


  { path: 'listado', component: ListadoComponent },
  { path: 'crear-destino', component: CrearDestinoComponent },
  { path: 'editar-destino/:id', component: CrearDestinoComponent },
  // { path: 'consultar', component: ConsultarDestinoComponent },
  // { path: ':id', component: DetalleDestinoComponent },
  { path: '**', redirectTo: 'listado' }








];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinosRoutingModule { }
