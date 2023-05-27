import { Component, OnInit, HostBinding } from '@angular/core';
import { GenerosLiterariosService } from 'src/app/services/generos-literarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-generos-literarios-list',
  templateUrl: './generos-literarios-list.component.html',
  styleUrls: ['./generos-literarios-list.component.css']
})
export class GenerosLiterariosListComponent implements OnInit 
{
  @HostBinding ('class') classes='row'
  genero_literario:any=[];

  constructor(private generosliterariosService:GenerosLiterariosService)
  {}ngOnInit(): void 
  {
    this.getGeneros_LiterariosL();
  }

  getGeneros_LiterariosL()
  {
    this.generosliterariosService.getGeneros_Literarios().subscribe(
      res => this.genero_literario=res,
      err => console.error(err)
    );
  }

  deleteGenero_LiterarioL(Id_Genero_Literario:string)
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
        this.generosliterariosService.deleteGenero_Literario(Id_Genero_Literario).subscribe(
          res => {
            console.log(res);
            this.getGeneros_LiterariosL();
            Swal.fire(
              '¡Borrado!',
              'El género literario ha sido borrado.',
              'success'
            )
          },
          err => console.error(err)
        );
      }
    });
  }
}

