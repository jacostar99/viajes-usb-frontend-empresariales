import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { TipoIdentificacion } from 'src/app/models/tipo-identificacion';
import { ClienteService } from 'src/app/services/cliente.service';
import { TipoIdentificacionService } from 'src/app/services/tipo-identificacion.service';
import { DatePipe } from '@angular/common';
import swal from 'sweetalert2';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  cliente: Cliente = new Cliente(0,"","","","","","","","", null, new Date(), null,"JACOSTAR","","","",0);

  tipoIdList: TipoIdentificacion [] = [];

  tiid:string = "";

  fechita:any;

  constructor(private tipoIdentificacionService: TipoIdentificacionService,
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public datepipe:DatePipe) { }

  ngOnInit(): void {
    this.cargarCliente();
    this.cargarTiposId();
  }

  cargarTiposId() {
    this.tipoIdentificacionService.consultarTides().subscribe(resp => {
      this.tipoIdList = resp
      console.log(this.tipoIdList)
    }
    )

  }

  crear() {
    this.cliente.tipoIdentificacionCodigo= this.tiid
    this.clienteService.guardarCliente(this.cliente).subscribe(
      cliente => {
        swal('Cliente creado', `Cliente ${cliente.nombre} creado con exito`, 'success')
        this.router.navigate(['/cliente/listado'])
        // console.log(destino)
      }

    )

  }



  cargarCliente(): void {

    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {     
        this.clienteService.obtenerCliente(id).subscribe((cliente) => {
          this.cliente = cliente
          console.log(cliente);
          this.fechita = this.datepipe.transform(this.cliente.fechaNacimiento, 'yyyy-MM-dd');
          this.cliente.fechaNacimiento = this.fechita;
          this.tiid = cliente.tiId.codigo;
          console.log(cliente.tiId.codigo);
          
        })

      }
    })
  

  }

  editar(): void {
    this.cliente.usuModificador= 'JACOSTAR';
    this.cliente.fechaModificacion= new Date();
    this.cliente.tipoIdentificacionCodigo = this.tiid;
    
    this.clienteService.actualizar(this.cliente).subscribe(
      cliente => {
        swal('Cliente actualizado', `Cliente ${cliente.nombre} actualizado con exito`, 'success')
        this.router.navigate(['/cliente/listado'])
      }
    )

  }

}
