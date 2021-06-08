import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoDestino } from 'src/app/models/tipo-destino';
import { TipoDestinoService } from 'src/app/services/tipo-destino.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-crear-tide',
  templateUrl: './crear-tide.component.html',
  styleUrls: ['./crear-tide.component.css']
})
export class CrearTideComponent implements OnInit {

  tide: TipoDestino = new TipoDestino(0,"","","",new Date(),"","JACOSTAR","",null);



  constructor(private tipoDestinoService: TipoDestinoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarTide();
  }

  

  crear() {
    this.tipoDestinoService.guardarTide(this.tide).subscribe(
      tide => {
        swal('Tipo destino creado', `Tipo destino ${tide.nombre} creada con exito`, 'success')
        this.router.navigate(['/tipo-destino/listado'])
      }

    )

  }



  cargarTide(): void {

    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {     
        this.tipoDestinoService.obtenerTide(id).subscribe((tide) => {
          this.tide = tide
     
          
        })

      }
    })
  

  }

  editar(): void {
    this.tide.usuModificador= 'JACOSTAR';
    this.tide.fechaModificacion= new Date();
    
    this.tipoDestinoService.actualizar(this.tide).subscribe(
      tide => {
        swal('Tipo destino actualizado', `Tipo destino ${tide.nombre} actualizado con exito`, 'success')
        this.router.navigate(['/tipo-destino/listado'])
      }
    )

  }

}
