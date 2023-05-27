import { Component, OnInit, HostBinding } from '@angular/core';
import { PremiosAutoresService } from 'src/app/services/premios-autores.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-premios-autores-list',
  templateUrl: './premios-autores-list.component.html',
  styleUrls: ['./premios-autores-list.component.css']
})
export class PremiosAutoresListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  premiosAutores: any = [];
  constructor (private premiosAutoresService: PremiosAutoresService, private router:Router, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.getPremioAutor();
  }

  getPremioAutor(){
    this.premiosAutoresService.getAll().subscribe(
      res => this.premiosAutores = res,
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
        this.premiosAutoresService.delete(id).subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
          },
          err => console.error(err)
        );
        Swal.fire(
          '¡Borrado!',
          'El Premio de ese autor ha sido borrado.',
          'success'
        )
      }
    })
  }

}
