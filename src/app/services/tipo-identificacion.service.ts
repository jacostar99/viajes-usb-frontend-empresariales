import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import swal from 'sweetalert2';
import { TipoIdentificacion } from '../models/tipo-identificacion';


@Injectable({
  providedIn: 'root'
})
export class TipoIdentificacionService {

  private url:string = environment.apiUrl + '/api/tipoIdentificacion';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  

  constructor(public http: HttpClient) { }

  consultarTides():Observable<TipoIdentificacion[]>{
    return this.http.get<TipoIdentificacion[]>(this.url + "/getTipoIdentificacion");

  }

  guardarTide(tide: TipoIdentificacion): Observable<TipoIdentificacion> {
    return this.http.post<TipoIdentificacion>(this.url + '/guardarTipoIdentificacion', tide, { headers: this.httpHeaders }).pipe(
      catchError(error =>{
        swal('Error al crear el tipo de identificación', error.error.error ,'error')
        return throwError(error);
      })
    );;;

  }

  actualizar(tide: TipoIdentificacion): Observable<TipoIdentificacion> {
    return this.http.put<TipoIdentificacion>(this.url + '/actualizarTipoIdentificacion', tide, { headers: this.httpHeaders }).pipe(
      catchError(error =>{
        swal('Error al actualizar el tipo de identificación', error.error.error,'error')
        return throwError(error);
      })
    );;;
  }

  eliminarTide(idTide: number): Observable<TipoIdentificacion> {
    return this.http.delete<TipoIdentificacion>(this.url + '/eliminarTipoIdentificacion/' + idTide, { headers: this.httpHeaders }).pipe(
      catchError(error =>{
        swal('Error al eliminar el tipo de identificación', 'Este tipo de identificación es referido en la tabla cliente','error')
        return throwError(error);
      })
    );;
  }

  obtenerTiId(idTiId: number): Observable<any> {

    return this.http.get<any>(this.url + '/getTipoIdentificacionPorId/' + idTiId);

  }

  consultarTipoIdentificacionLike(name:string):Observable<TipoIdentificacion[]>{
    return this.http.get<TipoIdentificacion[]>(this.url + "/likeNombreTipoIdentificacion/" + name);

  }
}
