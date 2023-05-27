import { Component, HostBinding, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';
import { Libro } from 'src/app/models/Libro';

import { LibrosLenguajesService } from 'src/app/services/libros-lenguajes.service';
import { Libro_Lenguaje } from 'src/app/models/Libro_Lenguaje';

import { LenguajesBoyceService } from 'src/app/services/lenguajes-boyce.service';
import { Lenguaje_Boyce } from 'src/app/models/Lenguaje_Boyce';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-libro-form',
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.css']
})
export class LibroFormComponent implements OnInit{
  @HostBinding('class') classes = 'row';

  libro: Libro =
    {
      Id_Libro: 0,
      ISBN: '',
      Nombre_Libro: '',
      Id_Autor: 0,
      Id_Editorial: 0,
      Edicion: '',
      Id_Genero_Literario: 0,
      Id_Tipo_Tapa: 0,
      Numero_Paginas: '',
      Fecha_Publicacion: new Date,
      Sinopsis: ''
    };

  libro_Lenguaje: Libro_Lenguaje =
    {
      Id_Libro_Lenguaje: 0,
      Id_Libro: 0,
      Id_Lenguaje: 0
    };

  lenguaje_Boyce: Lenguaje_Boyce =
    {
      Id_Temporal: 0,
      Id_Lenguaje: 0
    };

  edit: boolean = false;

  editoriales: any = [];
  lenguajes: any = [];
  generos_literarios:any=[];
  tipos_tapas:any=[];
  autores:any=[];

  lenguajesBoyce: any = [];

  constructor(private librosService: LibrosService, public lenguajesBoyceService: LenguajesBoyceService, private librosLenguajesService: LibrosLenguajesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.librosService.getLibro(params['id']).subscribe
        (
          res => {
            console.log(res);
            this.libro = res;
            this.edit = true;
          },
          err => console.error(err)
        )
    }

    this.listEditoriales();
    this.listLenguajes();
    this.listLenguajesBoyce();
    this.listGenerosLiterarios();
    this.listTiposTapas();
    this.listAutores();
  }

  actualizarLista(){
    this.listLenguajesBoyce();
  }

  saveNewLibro() {
    delete this.libro.Id_Libro;

    this.librosService.saveLibro(this.libro).subscribe
      (
        res => {
          console.log(res);
          this.router.navigate(['/libros']);
        },
        err => console.error(err)
      );
  }

  // Lenguaje en la tabla temporal
  saveNewLenguajeBoyce() {
    delete this.lenguaje_Boyce.Id_Temporal;

    this.lenguajesBoyceService.saveLenguaje(this.lenguaje_Boyce).subscribe
      (
        res => {
          console.log(res);
        },
        err => console.error(err)
      );
  }

  // Lenguaje en la tabla temporal
  saveNewLenguaje() {
    delete this.libro_Lenguaje.Id_Libro_Lenguaje;

    this.librosLenguajesService.saveLibroLenguaje(this.libro_Lenguaje).subscribe
      (
        res => {
          console.log(res);
          this.router.navigate(['/libros']);
        },
        err => console.error(err)
      );
  }

  // Borrar lenguaje de la tabla temporal
  deleteLenguajeBoyce(id: string) {
    this.lenguajesBoyceService.deleteLenguaje(id).subscribe
      (
        res => {
          console.log(res)
          this.listLenguajesBoyce();
        },
        err => console.error(err)
      )
  }

  updateLibro() {
    this.librosService.updateLibro(this.libro.Id_Libro!, this.libro).subscribe
      (
        res => {
          console.log(res);
          this.router.navigate(['/libros']);
        },
        err => console.error(err)
      );
  }


  // Método para las editoriales
  listEditoriales(): void {
    this.librosService.getEditoriales().subscribe
      (
        res => this.editoriales = res,
        err => console.error(err)
      );
  }

  // Método para los lenguajes
  listLenguajes(): void {
    this.librosService.getLenguajes().subscribe
      (
        res => this.lenguajes = res,
        err => console.error(err)
      );
  }

  // Método para los lenguajes
  listLenguajesBoyce(): void {
    this.lenguajesBoyceService.getLenguajes().subscribe
      (
        res => this.lenguajesBoyce = res,
        err => console.error(err)
      );
  }

  // Método para los generos literarios
  listGenerosLiterarios(): void {
    this.librosService.getGeneros_Literarios().subscribe
      (
        res => this.generos_literarios = res,
        err => console.error(err)
      );
  }

  // Método para los tipos tapas
  listTiposTapas(): void {
    this.librosService.getTipos_Tapas().subscribe
      (
        res => this.tipos_tapas = res,
        err => console.error(err)
      );
  }

  // Método para los autores
  listAutores(): void {
    this.librosService.getAll().subscribe
      (
        res => this.autores = res,
        err => console.error(err)
      );
  }
}
