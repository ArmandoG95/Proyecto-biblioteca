import { Component } from '@angular/core';
import { EstiloLiterario } from 'src/app/models/EstilosLiterarios';
import { ActivatedRoute, Router } from '@angular/router';
import { EstilosLiterariosService } from 'src/app/services/estilos-literarios.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-estilos-literarios-form',
  templateUrl: './estilos-literarios-form.component.html',
  styleUrls: ['./estilos-literarios-form.component.css']
})
export class EstilosLiterariosFormComponent {
  estiloLiterario: EstiloLiterario = {
    Id_Estilo_Literario: 0,
    Estilo_Literario : ""
  }

  selectedId: string = '';
  edit: boolean = false;

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['Id_Estilo_Literario']){
      this.estilosLiterariosService.get(params['Id_Estilo_Literario']).subscribe(
        res => {
          console.log(res);
          this.estiloLiterario = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }

  }
  constructor(private estilosLiterariosService: EstilosLiterariosService, private activatedRoute:ActivatedRoute, private router:Router){
  }



  update():void{
    this.estilosLiterariosService.update(this.estiloLiterario.Id_Estilo_Literario! ,this.estiloLiterario).subscribe(
      res => {console.log(res)
      this.router.navigate(['/EstilosLiterarios']);
      },
      err => console.error(err)
    );
  }

  saveNewEstiloLiterario(){
    delete this.estiloLiterario.Id_Estilo_Literario;
    
    this.estilosLiterariosService.save(this.estiloLiterario).subscribe(
      res =>{console.log(res)
               // Mostrar mensaje de confirmación
               Swal.fire({
                title: 'Estilo creado exitosamente',
                icon: 'success',
                timer: 3000, // El mensaje se cerrará automáticamente después de 3 segundos
                showConfirmButton: false
            });
      },
      err => console.error(err)
    );
  }
}
