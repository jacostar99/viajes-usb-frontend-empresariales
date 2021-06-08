import { Component, OnInit } from '@angular/core';
import { TipoIdentificacion } from 'src/app/models/tipo-identificacion';
import { TipoIdentificacionService } from 'src/app/services/tipo-identificacion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  tipoIdList: TipoIdentificacion[] = [];

  constructor(private tipoIdentificacionService: TipoIdentificacionService) { }

  ngOnInit(): void {
    this.consultarTodos();
  }

  consultarTodos(): void {
    this.tipoIdentificacionService.consultarTides().subscribe((tiIds) => {
      this.tipoIdList = tiIds;

    })
  }

  eliminar(tiId: TipoIdentificacion): void {
    swal({
      title: '¿Estas seguro?',
      text: `¿Seguro que desea eliminar el tipo de identificación ${tiId.nombre}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.tipoIdentificacionService.eliminarTide(tiId.idTiid).subscribe(
          response => {
            this.tipoIdList = this.tipoIdList.filter(use => use !== tiId)
            swal(
              'Tipo identificación eliminado!',
              `Tipo identificación ${tiId.nombre} eliminado con exito.`


            )
          }
        )
      }
    }

    )

  }

  busqueda(name:string){
    if (name === null || name === '') {
      this.consultarTodos();
    } else {
      this.tipoIdentificacionService.consultarTipoIdentificacionLike(name).subscribe(data => {
        this.tipoIdList = data;
      }, error => {
        console.log(error);
      });
    }
    

  }

}
