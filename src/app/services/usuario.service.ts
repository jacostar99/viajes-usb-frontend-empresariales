import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string=  environment.apiUrl + '/api/usuario';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})


  constructor(public httpClient: HttpClient) { }

  public findAll(): Observable<any> {
    return this.httpClient.get(this.url+'/getUsuarios');
  }
  public save(user:Usuario ): Observable<any> {
    return this.httpClient.post(this.url+'/guardarUsuario',user,{headers: this.httpHeaders});
  }

  public update(user:Usuario): Observable<any>{
    return this.httpClient.put(this.url+'/actualizarUsuario', user, {headers: this.httpHeaders});
  }
  public delete(idUser:number):Observable<any>{
    return this.httpClient.delete(this.url+'/eliminarUsuario/'+idUser,{headers:this.httpHeaders});
  }
}
