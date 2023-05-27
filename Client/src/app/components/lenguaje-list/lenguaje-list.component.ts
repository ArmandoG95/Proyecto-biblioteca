import { Component, HostBinding, OnInit } from '@angular/core';
import { LenguajesService } from '../../services/lenguajes.service'

@Component({
  selector: 'app-lenguaje-list',
  templateUrl: './lenguaje-list.component.html',
  styleUrls: ['./lenguaje-list.component.css']
})
export class LenguajeListComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  lenguajes: any = [];

  constructor(private lenguajesService: LenguajesService) { }

  ngOnInit(): void {
    this.listLenguajes();
  }

  listLenguajes(): void {
    this.lenguajesService.getLenguajes().subscribe
      (
        res => this.lenguajes = res,
        err => console.error(err)
      );
  }

  deleteLenguaje(id: string) {
    if(confirm('¿Estas seguro que quieres borrar?')) 
    this.lenguajesService.deleteLenguaje(id).subscribe
      (
        res => {
          console.log(res)
          this.listLenguajes();
        },
        err => console.error(err)
      )
  }
}
