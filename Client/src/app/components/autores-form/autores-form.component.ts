import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/models/Autores';
import { AutoresService } from 'src/app/services/autores.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'; //ESTE SIRVE PARA LAS ALERTAS, NECESITAS INSTALARLO CON EL COMANDO EN CLIENT: npm install sweetalert2

@Component({
  selector: 'app-autores-form',
  templateUrl: './autores-form.component.html',
  styleUrls: ['./autores-form.component.css']
})
export class AutoresFormComponent implements OnInit {
  autor:Autor = {
    Id_Autor: 0,
    Nombre:'',
    Apellidp_Paterno:'',
    Apellido_Materno: '', 
    Pseudonimo: '', 
    Id_Nacionalidad: 0
  }

  nacionalidades: any = [];
  selectedId: string = '';
  edit: boolean = false;

  ngOnInit(): void {
    this.getNacionalidades();
    const params = this.activatedRoute.snapshot.params;
    if (params['Id_Autor']){
      this.autoresService.get(params['Id_Autor']).subscribe(
        res => {
          console.log(res);
          this.autor = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }
  constructor(private autoresService: AutoresService, private activatedRoute:ActivatedRoute, private router:Router){

  }



  update():void{
    this.autoresService.update(this.autor.Id_Autor! ,this.autor).subscribe(
      res => {console.log(res)
      this.router.navigate(['/Autores']);
      },
      err => console.error(err)
    );
  }

  saveNewAutor(){
    delete this.autor.Id_Autor;
    
    this.autoresService.save(this.autor).subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/Autores']);

         // Mostrar mensaje de confirmación
         Swal.fire({
          title: 'Autor creado exitosamente',
          icon: 'success',
          timer: 3000, // El mensaje se cerrará automáticamente después de 3 segundos
          showConfirmButton: false
      });

      
      },
      err => console.error(err)
    );
  }

  getNacionalidades(){
    this.autoresService.getNacionalidades().subscribe(
      res => this.nacionalidades = res,
      err => console.error(err)
    );
  }
}
