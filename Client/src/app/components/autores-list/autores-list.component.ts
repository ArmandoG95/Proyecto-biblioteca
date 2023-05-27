import { Component, OnInit, HostBinding } from '@angular/core';
import { AutoresService } from 'src/app/services/autores.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'; //ESTE SIRVE PARA LAS ALERTAS, NECESITAS INSTALARLO CON EL COMANDO EN CLIENT: npm install sweetalert2

@Component({
  selector: 'app-autores-list',
  templateUrl: './autores-list.component.html',
  styleUrls: ['./autores-list.component.css']
})
export class AutoresListComponent {
  @HostBinding('class') classes = 'row';
  autores: any = [];
  constructor (private autoresService: AutoresService, private router:Router, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.getAutor();
  }

  getAutor(){
    this.autoresService.getAll().subscribe(
      res => this.autores = res,
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
        this.autoresService.delete(id).subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
          },
          err => console.error(err)
        );
        Swal.fire(
          '¡Borrado!',
          'El Autor ha sido borrado.',
          'success'
        )
      }
    })
  }

}

