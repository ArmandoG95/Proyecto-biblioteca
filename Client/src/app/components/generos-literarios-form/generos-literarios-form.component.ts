import { Component, OnInit, HostBinding } from '@angular/core';
import { Generos_Literarios } from 'src/app/models/Generos_Literarios';
import { GenerosLiterariosService } from 'src/app/services/generos-literarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-generos-literarios-form',
  templateUrl: './generos-literarios-form.component.html',
  styleUrls: ['./generos-literarios-form.component.css']
})
export class GenerosLiterariosFormComponent implements OnInit {
  genero_literario: Generos_Literarios = {
  Id_Genero_Literario:0,
  Genero_Literario:"",
  Id_Estilo_Literario:0
}

estilos: any = [];

edit:boolean=false;

constructor(private generosLiterariosService: GenerosLiterariosService, private router:Router, private activatedRoute:ActivatedRoute)
  {
  }

  ngOnInit(): void 
  {
    this.getEstilosLiterariosF();
    const params=this.activatedRoute.snapshot.params;
    if(params['Id_Genero_Literario'])
    {
      this.generosLiterariosService.getGenero_Literario(params['Id_Genero_Literario']).subscribe(
        res=>{
          console.log(res);
          this.genero_literario=res;
          this.edit=true;
        },
        err=>console.error(err)
      );
    }
  }


  saveNewGenero_Literario(){
    delete this.genero_literario.Id_Genero_Literario;

    this.generosLiterariosService.saveGenero_Literario(this.genero_literario).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/GenerosLiterarios']);

        // Mostrar mensaje de confirmación
        Swal.fire({
          title: 'Genero creado exitosamente',
          icon: 'success',
          timer: 1000, // El mensaje se cerrará automáticamente después de 3 segundos
          showConfirmButton: false
      });
      },
      err=>console.error(err)
    );
  }

  updateGenero_LiterarioF()
  {
    
    this.generosLiterariosService.updateGenero_Literario(this.genero_literario.Id_Genero_Literario!,this.genero_literario).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/GenerosLiterarios']);

        Swal.fire({
          title: 'Genero editado exitosamente',
          icon: 'success',
          timer: 1000, // El mensaje se cerrará automáticamente después de 3 segundos
          showConfirmButton: false
      });
      },
      err=>console.error(err)
    );
  }

  getEstilosLiterariosF()
  {
    this.generosLiterariosService.getEstilos().subscribe(
      res => this.estilos=res,
      err => console.error(err)
    );
  }
 

}
