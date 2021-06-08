import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTideComponent } from './pages/crear-tide/crear-tide.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [

  { path: 'listado', component: ListadoComponent },
  { path: 'crear-tipo-destino', component: CrearTideComponent},
  { path: 'editar-tipo-destino/:id', component: CrearTideComponent },
  { path: '**', redirectTo: 'listado' }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposDestinoRoutingModule { }
