import { Component, HostBinding, OnInit } from '@angular/core';
import { Libros2Service } from 'src/app/services/libros2.service';
import { Libro2 } from 'src/app/models/Libros2';
import Swal from 'sweetalert2';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-libros2-form',
  templateUrl: './libros2-form.component.html',
  styleUrls: ['./libros2-form.component.css']
})
export class Libros2FormComponent implements OnInit{
  @HostBinding('class') classes = 'row';

  libro: Libro2 =
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
      Sinopsis: '',
      Imagen: ''
    };


  edit: boolean = false;

  editoriales: any = [];
  generos_literarios:any=[];
  tipos_tapas:any=[];
  autores:any=[];

  libros2: any = [];

  constructor(private librosService: Libros2Service, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  
    const params = this.activatedRoute.snapshot.params;
    if (params['Id_Libro']) {
      this.librosService.getLibro(params['Id_Libro']).subscribe
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
    this.listGenerosLiterarios();
    this.listTiposTapas();
    this.listAutores();
  }


  saveNewLibro() {
    delete this.libro.Id_Libro;

    this.librosService.saveLibro(this.libro).subscribe
      (
        res => {
          console.log(res);
          this.router.navigate(['/libros2']);

          Swal.fire({
            title: 'Libro creado exitosamente',
            icon: 'success',
            timer: 1000, // El mensaje se cerrará automáticamente después de 3 segundos
            showConfirmButton: false
        });

          
        },
        err => console.error(err)
      );
  }


  updateLibro() {
    this.librosService.updateLibro(this.libro.Id_Libro!, this.libro).subscribe
      (
        res => {
          console.log(res);
          this.router.navigate(['/libros2']);

          Swal.fire({
            title: 'Libro editado exitosamente',
            icon: 'success',
            timer: 1000, // El mensaje se cerrará automáticamente después de 3 segundos
            showConfirmButton: false
        });

          
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

  verLibro(libro2: any) {
    Swal.fire({
      title: libro2.Nombre_Libro,
      text: `Autor: ${libro2.Nombre}\nEditorial: ${libro2.Editorial}\nEdición: ${libro2.Edicion}\nGénero literario: ${libro2.Genero_Literario}\nTipo de tapa: ${libro2.Tipo_Tapa}`,
      imageUrl: libro2.Imagen,
      imageWidth: 400,
      imageHeight: 600,
      imageAlt: `${libro2.Nombre_Libro} image`
    });
  }
  
}
