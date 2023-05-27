import { Component, OnInit } from '@angular/core';
import { PremioAutor } from 'src/app/models/PremiosAutores';
import { PremiosAutoresService } from 'src/app/services/premios-autores.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'; //ESTE SIRVE PARA LAS ALERTAS, NECESITAS INSTALARLO CON EL COMANDO EN CLIENT: npm install sweetalert2

@Component({
  selector: 'app-premios-autores-form',
  templateUrl: './premios-autores-form.component.html',
  styleUrls: ['./premios-autores-form.component.css']
})
export class PremiosAutoresFormComponent {
  premioAutor:PremioAutor = {
    Id_Premio_Autor: 0,
    Id_Premio: 0,
    Id_Autor: 0
  }

  premios: any = [];
  autores: any = [];
  selectedId: string = '';
  edit: boolean = false;

  ngOnInit(): void {
    this.getPremios();
    this.getAutores();
    const params = this.activatedRoute.snapshot.params;
    if (params['Id_Premio_Autor']){
      this.premiosAutoresService.get(params['Id_Premio_Autor']).subscribe(
        res => {
          console.log(res);
          this.premioAutor = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }
  constructor(private premiosAutoresService: PremiosAutoresService, private activatedRoute:ActivatedRoute, private router:Router){

  }

  saveNewAutor(){
    delete this.premioAutor.Id_Premio_Autor;
    
    this.premiosAutoresService.save(this.premioAutor).subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/PremiosAutores']);

         // Mostrar mensaje de confirmación
         Swal.fire({
          title: 'Premio guardado exitosamente',
          icon: 'success',
          timer: 3000, // El mensaje se cerrará automáticamente después de 3 segundos
          showConfirmButton: false
      });

      
      },
      err => console.error(err)
    );
  }

  getPremios(){
    this.premiosAutoresService.getPremios().subscribe(
      res => this.premios = res,
      err => console.error(err)
    );
  }

  getAutores(){
    this.premiosAutoresService.getAutores().subscribe(
      res => this.autores = res,
      err => console.error(err)
    );
  }
}
