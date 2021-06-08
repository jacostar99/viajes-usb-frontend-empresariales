import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  clientes: Cliente [] = [];

  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.consultarTodos();
  }

  consultarTodos(): void {
    this.clienteService.consultarClientes().subscribe((clientes) => {
      this.clientes = clientes;
      console.log(this.clientes);
      
    })
  }

  eliminar(cliente: Cliente): void {
    swal({
      title: '¿Estas seguro?',
      text: `¿Seguro que desea eliminar el cliente ${cliente.nombre}?`,
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
        this.clienteService.eliminarCliente(cliente.idClie).subscribe(
          response => {
           this.clientes = this.clientes.filter(use => use !== cliente)
            swal(
              'Cliente eliminado!',
              `Cliente ${cliente.nombre} eliminado con exito.`


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
      this.clienteService.consultarClientesLike(name).subscribe(data => {
        this.clientes = data;
      }, error => {
        console.log(error);
      });
    }
    

  }
  

}
