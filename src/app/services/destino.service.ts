import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Destino } from '../models/destino';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class DestinoService {

  private url:string = environment.apiUrl + '/api/destino';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  


  constructor(public http: HttpClient) { }

  consultarDestinos():Observable<Destino[]>{
    return this.http.get<Destino[]>(this.url + "/getDestinos");

  }

  guardarDestino(destino: Destino): Observable<Destino> {
    return this.http.post<Destino>(this.url + '/guardarDestino', destino, { headers: this.httpHeaders }).pipe(
      catchError(error =>{
        swal('Error al guardar el destino',error.error.error,'error')
        return throwError(error);
      })
    );;;

  }

  actualizar(destino: Destino): Observable<Destino> {
    return this.http.put<Destino>(this.url + '/actualizarDestino', destino, { headers: this.httpHeaders }).pipe(
      catchError(error =>{
        swal('Error al actualizar el destino', error.error.error,'error')
        return throwError(error);
      })
    );;;
  }

  eliminarDestino(idDest: number): Observable<Destino> {
    return this.http.delete<Destino>(this.url + '/eliminarDestino/' + idDest, { headers: this.httpHeaders });
  }

  obtenerDestino(idDest: number): Observable<any> {

    return this.http.get<any>(this.url + '/getDestinoPorCodigo/' + idDest);

  }

  consultarDestinoLike(name:string):Observable<Destino[]>{
    return this.http.get<Destino[]>(this.url + "/likeNombreDestino/" + name);

  }


}
