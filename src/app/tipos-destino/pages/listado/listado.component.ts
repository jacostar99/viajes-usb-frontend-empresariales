import { Component, OnInit } from '@angular/core';
import { TipoDestino } from 'src/app/models/tipo-destino';
import { TipoDestinoService } from 'src/app/services/tipo-destino.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  
  tideList: TipoDestino[] = [];

  constructor(private tipoDestinoService: TipoDestinoService) { }

  ngOnInit(): void {
    this.consultarTodos();
  }

  consultarTodos(): void {
    this.tipoDestinoService.consultarTiposDestino().subscribe((tide) => {
      this.tideList = tide;

    })
  }

  eliminar(tide: TipoDestino): void {
    swal({
      title: '¿Estas seguro?',
      text: `¿Seguro que desea eliminar el tipo de destino ${tide.nombre}?`,
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
        this.tipoDestinoService.eliminarTide(tide.idTide).subscribe(
          response => {
            this.tideList = this.tideList.filter(use => use !== tide)
            swal(
              'Tipo destino eliminado!',
              `Tipo destino ${tide.nombre} eliminado con exito.`


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
      this.tipoDestinoService.consultarTipoDestinoLike(name).subscribe(data => {
        this.tideList = data;
      }, error => {
        console.log(error);
      });
    }
    

  }
  

  

}
