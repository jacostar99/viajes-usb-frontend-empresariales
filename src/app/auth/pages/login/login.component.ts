import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public ema: string = "";
  public pass: string = "";

  public rol:string ="A";

  constructor(private router: Router, private authService:AuthService) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  public login():void{
    this.authService.loginFirebase(this.ema,this.pass).then(
      (result)=>{
        if(result){
          if(result.user?.emailVerified==true){
            localStorage.setItem('rol', this.rol)
            this.router.navigate(['/cliente/listado']);
            swal(
              'Info',
              `Bienvenido ${this.ema}`,
              'success'
            )
          }
          else {
            swal(
              'Error',
              'Debes verificar tu email para ingresar',
              'error'
            )
          }
        }
      }
    ).catch((error)=>{
      swal(
        'Error',
        'Email o password incorrectos',
        'error'
      )
    })
  }

}
