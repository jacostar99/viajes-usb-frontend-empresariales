import { Component, OnInit } from '@angular/core';
import { Destino } from 'src/app/models/destino';
import { DestinoService } from 'src/app/services/destino.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  destinos: Destino[] = [];

  constructor(private destinoService:DestinoService) { }

  ngOnInit(): void {
    this.consultarTodos();
  }

  consultarTodos(){
    this.destinoService.consultarDestinos().subscribe((destinos) =>{
      this.destinos = destinos;
    });
  }

  eliminar(destino: Destino): void {
    swal({
      title: '¿Estas seguro?',
      text: `¿Seguro que desea eliminar el destino ${destino.nombre}?`,
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
        this.destinoService.eliminarDestino(destino.idDest).subscribe(
          response => {
           this.destinos = this.destinos.filter(use => use !== destino)
            swal(
              'Destino eliminado!',
              `Destino ${destino.nombre} eliminado con exito.`


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
      this.destinoService.consultarDestinoLike(name).subscribe(data => {
        this.destinos = data;
      }, error => {
        console.log(error);
      });
    }
    

  }

}
