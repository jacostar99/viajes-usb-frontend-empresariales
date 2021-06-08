import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , throwError  } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoDestino } from '../models/tipo-destino';
import { catchError } from 'rxjs/operators';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class TipoDestinoService {
  
  private url:string = environment.apiUrl + '/api/tipoDestino';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(public http: HttpClient) { }

  consultarTiposDestino():Observable<TipoDestino[]>{
    return this.http.get<TipoDestino[]>(this.url + "/getTiposDestino")
  }

  guardarTide(tide: TipoDestino): Observable<TipoDestino> {
    return this.http.post<TipoDestino>(this.url + '/guardarTipoDestino', tide, { headers: this.httpHeaders }).pipe(
      catchError(error =>{
        swal('Error al crear el tipo destino', error.error.error,'error')
        return throwError(error);
      })
    );;

  }

  actualizar(tide: TipoDestino): Observable<TipoDestino> {
    return this.http.put<TipoDestino>(this.url + '/actualizarTipoDestino', tide, { headers: this.httpHeaders }).pipe(
      catchError(error =>{
        swal('Error al actualizar el tipo destino', error.error.error,'error')
        return throwError(error);
      })
    );;
  }

  eliminarTide(idTide: number): Observable<TipoDestino> {
    return this.http.delete<TipoDestino>(this.url + '/eliminarTipoDestino/' + idTide, { headers: this.httpHeaders }).pipe(
      catchError(error =>{
        swal('Error al eliminar el tipo destino', 'Este tipo de destino es referido en la tabla destino','error')
        return throwError(error);
      })
    );
  }

  obtenerTide(idTiId: number): Observable<any> {

    return this.http.get<any>(this.url + '/getTipoDestinoPorId/' + idTiId);
  }

  consultarTipoDestinoLike(name:string):Observable<TipoDestino[]>{
    return this.http.get<TipoDestino[]>(this.url + "/likeNombreTipoDestino/" + name);

  }

  
}
