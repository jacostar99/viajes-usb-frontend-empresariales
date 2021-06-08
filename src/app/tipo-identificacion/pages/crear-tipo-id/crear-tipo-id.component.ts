import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoIdentificacion } from 'src/app/models/tipo-identificacion';
import { TipoIdentificacionService } from 'src/app/services/tipo-identificacion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-crear-tipo-id',
  templateUrl: './crear-tipo-id.component.html',
  styleUrls: ['./crear-tipo-id.component.css']
})
export class CrearTipoIdComponent implements OnInit {

  tiId: TipoIdentificacion = new TipoIdentificacion(0,"","", new Date(), null ,"JACOSTAR","","A");



  constructor(private tipoIdentificacionService: TipoIdentificacionService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarTipoId();
  }

  

  crear() {
    this.tipoIdentificacionService.guardarTide(this.tiId).subscribe(
      tiid => {
        swal('Tipo identificación creado', `Tipo identificación ${tiid.nombre} creada con exito`, 'success')
        this.router.navigate(['/tipo-id/listado'])
      }

    )

  }



  cargarTipoId(): void {

    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {     
        this.tipoIdentificacionService.obtenerTiId(id).subscribe((tiid) => {
          this.tiId = tiid
      
          
        })

      }
    })
  

  }

  editar(): void {
    this.tiId.usuModificador= 'JACOSTAR';
    this.tiId.fechaModificacion= new Date();
    
    this.tipoIdentificacionService.actualizar(this.tiId).subscribe(
      tiid => {
        swal('Tipo identificación actualizado', `Tipo identificación ${tiid.nombre} actualizado con exito`, 'success')
        this.router.navigate(['/tipo-id/listado'])
      }
    )

  }

}
