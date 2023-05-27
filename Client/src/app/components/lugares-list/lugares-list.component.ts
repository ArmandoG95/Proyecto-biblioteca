import { Component, OnInit, HostBinding } from '@angular/core';
import { LugaresService } from 'src/app/services/lugares.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'; //ESTE SIRVE PARA LAS ALERTAS, NECESITAS INSTALARLO CON EL COMANDO EN CLIENT: npm install sweetalert2
@Component({
  selector: 'app-lugares-list',
  templateUrl: './lugares-list.component.html',
  styleUrls: ['./lugares-list.component.css']
})
export class LugaresListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  lugares: any = [];
  constructor(private lugaresService: LugaresService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getLugar();
  }

  getLugar() {
    this.lugaresService.getAll().subscribe(
      res => this.lugares = res,
      err => console.error(err)
    );

  }
  
  /*
  delete(id: string) {
    this.lugaresService.delete(id).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      },
      err => console.error(err)
    );
  }
}*/


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
      this.lugaresService.delete(id).subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
        err => console.error(err)
      );
      Swal.fire(
        '¡Borrado!',
        'El Lugar ha sido borrado.',
        'success'
      )
    }
    })
  }
}
