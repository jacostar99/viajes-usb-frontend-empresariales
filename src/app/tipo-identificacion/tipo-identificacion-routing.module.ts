import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTipoIdComponent } from './pages/crear-tipo-id/crear-tipo-id.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
  { path: 'listado', component: ListadoComponent },
  { path: 'crear-tipo-identificacion', component: CrearTipoIdComponent},
  { path: 'editar-tipo-identificacion/:id', component: CrearTipoIdComponent },
  { path: '**', redirectTo: 'listado' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoIdentificacionRoutingModule { }
