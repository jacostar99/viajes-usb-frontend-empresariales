import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import ('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import ('./auth/auth.module').then(m=>m.AuthModule)  
  },
  {
    path: 'destino',
    loadChildren: () => import ('./destinos/destinos.module').then(m=>m.DestinosModule)  
  },
  {
    path: 'tipo-id',
    loadChildren: () => import ('./tipo-identificacion/tipo-identificacion.module').then(m=>m.TipoIdentificacionModule)  
  },
  {
    path: 'cliente',
    loadChildren: () => import ('./cliente/cliente.module').then(m=>m.ClienteModule)  
  },
  {
    path: 'tipo-destino',
    loadChildren: () => import ('./tipos-destino/tipos-destino.module').then(m=>m.TiposDestinoModule)  
  },
   
  {path:'register',component:RegistroComponent},
  {path: '404', component: ErrorPageComponent},
  {path: '**' , redirectTo: 'auth'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
