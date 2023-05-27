import { Component, OnInit,HostBinding } from '@angular/core';
import { EstilosLiterariosService } from 'src/app/services/estilos-literarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-estilos-literarios-list',
  templateUrl: './estilos-literarios-list.component.html',
  styleUrls: ['./estilos-literarios-list.component.css']
})
export class EstilosLiterariosListComponent {
  @HostBinding('class') classes = 'row';
  estilosLiterarios: any = [];
  constructor (private estilosLiterariosService: EstilosLiterariosService, private router:Router, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.getEstilosLiterarios();
  }

  getEstilosLiterarios(){
    this.estilosLiterariosService.getAll().subscribe(
      res => this.estilosLiterarios = res,
      err => console.error(err)
    );

  }


  delete(id:string) {
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
        this.estilosLiterariosService.delete(id).subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
          },
          err => console.error(err)
        );
        Swal.fire(
          '¡Borrado!',
          'El Estilo ha sido borrado.',
          'success'
        )
      }
    })
  }
  
}
