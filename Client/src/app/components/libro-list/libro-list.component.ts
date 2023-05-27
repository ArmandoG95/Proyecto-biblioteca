import { Component, HostBinding, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service'

@Component({
  selector: 'app-libro-list',
  templateUrl: './libro-list.component.html',
  styleUrls: ['./libro-list.component.css']
})
export class LibroListComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  libros: any = [];

  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.listLibros();
  }

  listLibros(): void {
    this.librosService.getLibros().subscribe
      (
        res => this.libros = res,
        err => console.error(err)
      );
  }

  deleteLibro(id: string) {
    if(confirm('¿Estas seguro que quieres borrar?')) 
    this.librosService.deleteLibro(id).subscribe
      (
        res => {
          console.log(res)
          this.listLibros();
        },
        err => console.error(err)
      )
  }
}
