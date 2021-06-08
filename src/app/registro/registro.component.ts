import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Usuario } from '../models/usuario';
import { AuthService } from '../services/auth.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public newUser: Usuario=new Usuario(0,"","","","","",new Date(),null,'JACOSTAR',"",'A');
  constructor(private authFirebaseService: AuthService,
              private router: Router,
              private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  register(){
    this.authFirebaseService.registerFirebase(this.newUser.correo,this.newUser.password).then(
      (result)=>{
       // this.newUser.password=result.user!.uid;
        console.log(this.newUser);
        this.usuarioService.save(this.newUser).subscribe( 
           
          (newUser)=>{
            localStorage.clear();
            console.log(newUser);
              swal(
                'Info',
                'Debes verificar tu correo para ingresar',
                'info'
              )
              this.router.navigate(['login']);
          }
        )
      }).catch((error)=>{
        console.log(error)
      })
  }


}
