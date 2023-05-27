import { Component, HostBinding, OnInit } from '@angular/core';
import { Libros2Service } from 'src/app/services/libros2.service';
import Swal from 'sweetalert2';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-libros2-list',
  templateUrl: './libros2-list.component.html',
  styleUrls: ['./libros2-list.component.css'],
})
export class Libros2ListComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  libros2: any = [];
  videoUrl: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer, private libros2Service: Libros2Service ) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets\videos\video.mp4');
  }


  ngOnInit(): void {
    this.listLibros();
  }

  listLibros(): void {
    this.libros2Service.getLibros().subscribe
      (
        res => this.libros2 = res,
        err => console.error(err)
      );
  }

  deleteLibro(id: string) {
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
        this.libros2Service.deleteLibro(id).subscribe(
          res => {
            console.log(res)
            this.listLibros();
            Swal.fire(
              '¡Borrado!',
              'El libro ha sido borrado.',
              'success'
            )
          },
          err => console.error(err)
        )
      }
    })
  }
}
