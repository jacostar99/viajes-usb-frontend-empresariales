import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {FormsModule} from '@angular/forms'
import { DatePipe } from '@angular/common';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { environment } from 'src/environments/environment';
import { RegistroComponent } from './registro/registro.component';

// import { TipoDestinoModule } from './tipos-destino/tipo-destino.module';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    NavbarComponent,
    FooterComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule
    
    // TipoDestinoModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
