import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from '../registro/registro.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  
      {path:'login' , component:LoginComponent},
      {path:'registro' , component:RegistroComponent},
      {path:'**' , redirectTo:'login'}
    
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
