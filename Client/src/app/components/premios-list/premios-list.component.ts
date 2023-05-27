import { Component, OnInit, HostBinding } from '@angular/core';
import { PremiosService } from 'src/app/services/premios.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'; //ESTE SIRVE PARA LAS ALERTAS, NECESITAS INSTALARLO CON EL COMANDO EN CLIENT: npm install sweetalert2

@Component({
  selector: 'app-premios-list',
  templateUrl: './premios-list.component.html',
  styleUrls: ['./premios-list.component.css']
})
export class PremiosListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  premios: any = [];
  constructor(private premiosService: PremiosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPremio();
  }

  getPremio() {
    this.premiosService.getAll().subscribe(
      res => this.premios = res,
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
        this.premiosService.delete(id).subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
          },
          err => console.error(err)
        );
        Swal.fire(
          '¡Borrado!',
          'El Premio ha sido borrado.',
          'success'
        )
      }
    })
  }
}

