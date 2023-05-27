import { Component, OnInit, HostBinding } from '@angular/core';
import { TiposTapasService } from 'src/app/services/tipos-tapas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipo-tapa-list',
  templateUrl: './tipo-tapa-list.component.html',
  styleUrls: ['./tipo-tapa-list.component.css']
})
export class TipoTapaListComponent  implements OnInit  
{
  @HostBinding ('class') classes='row'
  tipo_tapas:any=[];

  constructor(private tiposTapasService:TiposTapasService)
  {}ngOnInit(): void 
  {
    this.getTipos_Tapas();
  }

  getTipos_Tapas()
  {
    this.tiposTapasService.getTipos_Tapas().subscribe(
      res => this.tipo_tapas=res,
      err => console.error(err)
    );
  }

  deleteTipo_Tapa(id_tipo_tapa:string)
  {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrarlo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.tiposTapasService.deleteTipo_Tapa(id_tipo_tapa).subscribe(
          res => {
            console.log(res);
            this.getTipos_Tapas();
            Swal.fire(
              '¡Borrado!',
              'El tipo de tapa ha sido borrado.',
              'success'
            )
          },
          err => console.error(err)
        );
      }
    });
  }



  /*deleteTipo_Tapa(id_tipo_tapa:string)
  {
    this.tiposTapasService.deleteTipo_Tapa(id_tipo_tapa).subscribe
    (
      res=>{
        console.log(res);
        this.getTipos_Tapas();
      },
      err=>console.error(err)
    );
  }*/
}
