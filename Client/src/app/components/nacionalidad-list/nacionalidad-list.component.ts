import { Component, OnInit, HostBinding } from '@angular/core';
import { NacionalidadesService } from 'src/app/services/nacionalidades.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nacionalidad-list',
  templateUrl: './nacionalidad-list.component.html',
  styleUrls: ['./nacionalidad-list.component.css']
})
export class NacionalidadListComponent implements OnInit {
  @HostBinding('class') classes = 'row'
  nacionalidades: any = [];

  constructor(private nacionalidadesService: NacionalidadesService) { } ngOnInit(): void {
    this.getNacionalidades();
  }

  getNacionalidades() {
    this.nacionalidadesService.getNacionalidades().subscribe(
      res => this.nacionalidades = res,
      err => console.error(err)
    );
  }


  deleteNacionalidad(Id_Nacionalidad: string) {
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
        this.nacionalidadesService.deleteNacionalidad(Id_Nacionalidad).subscribe(
          res => {
            console.log(res);
            this.getNacionalidades();
          },
          err => console.error(err)
        );
        Swal.fire(
          '¡Borrado!',
          'La nacionalidad ha sido borrada.',
          'success'
        )
      }
    })
  }


}

