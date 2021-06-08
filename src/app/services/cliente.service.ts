import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import swal from 'sweetalert2';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url:string = environment.apiUrl + '/api/cliente';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(public http: HttpClient) { }

  consultarClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url + "/getClientes");

  }

  guardarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url + '/guardarCliente', cliente, { headers: this.httpHeaders }).pipe(
      catchError(error =>{
        swal('Error al crear el cliente', error.error.error,'error')
        return throwError(error);
      })
    );

  }

  actualizar(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.url + '/actualizarCliente', cliente, { headers: this.httpHeaders }).pipe(
      catchError(error =>{
        swal('Error al actualizar el cliente', error.error.error,'error')
        return throwError(error);
      })
    );;
  }

  eliminarCliente(idClie: number): Observable<Cliente> {
    return this.http.delete<Cliente>(this.url + '/eliminarCliente/' + idClie, { headers: this.httpHeaders });
  }

  obtenerCliente(idClie: number): Observable<any> {

    return this.http.get<any>(this.url + '/getClientePorId/' + idClie);

  }

  consultarClientesLike(name:string):Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url + "/likeNombreCliente/" + name);

  }
}
