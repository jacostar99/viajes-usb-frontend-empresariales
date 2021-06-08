import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authFirebaseService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  validarUsuario(){
    return localStorage.getItem('rol');
  }

  async deslog() {
    try {
      await this.authFirebaseService.logoutFirebase();
      localStorage.clear();
      this.router.navigate(['login']);
    } catch (error) {
      
    }
  }

}
