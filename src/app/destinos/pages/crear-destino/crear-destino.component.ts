import { Component, OnInit } from '@angular/core';
import { Destino } from 'src/app/models/destino';
import { TipoDestino } from 'src/app/models/tipo-destino';
import { DestinoService } from 'src/app/services/destino.service';
import { TipoDestinoService } from 'src/app/services/tipo-destino.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2'


@Component({
  selector: 'app-crear-destino',
  templateUrl: './crear-destino.component.html',
  styleUrls: ['./crear-destino.component.css']
})
export class CrearDestinoComponent implements OnInit {

  destino: Destino = new Destino(0, "", "", "", "", "", "", new Date(), "JACOSTAR", "A", "", null, "");

  tiposDestinoList: TipoDestino[] = [];
  tide: string = "";



  constructor(private tipoDestinoService: TipoDestinoService,
    private destinoService: DestinoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.cargarTiposDestino();
    this.cargarDestino();

  }

  cargarTiposDestino() {
    this.tipoDestinoService.consultarTiposDestino().subscribe(resp => {
      this.tiposDestinoList = resp
      console.log(this.tiposDestinoList)
    }
    )

  }

  crear() {
    this.destino.tipoDestinoCodigo = this.tide;
    this.destinoService.guardarDestino(this.destino).subscribe(
      destino => {
        swal('Destino creado', `Destino ${destino.nombre} creado con exito`, 'success')
        this.router.navigate(['/destino/listado'])
        // console.log(destino)
      }

    )

  }



  cargarDestino(): void {

    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {     
        this.destinoService.obtenerDestino(id).subscribe((destino) => {
          this.destino = destino
          console.log(destino);
          
          this.tide = destino.tipoDestino.codigo;
          console.log(destino.tipoDestino.codigo);
          
        })

      }
    })
  

  }

  editar(): void {
    this.destino.usuModificador= 'JACOSTAR';
    this.destino.fechaModificacion= new Date();
    this.destino.tipoDestinoCodigo = this.tide;
    
    this.destinoService.actualizar(this.destino).subscribe(
      destino => {
        swal('Destino actualizado', `Destino ${destino.nombre} actualizado con exito`, 'success')
        this.router.navigate(['/destino/listado'])
      }
    )

  }



}
