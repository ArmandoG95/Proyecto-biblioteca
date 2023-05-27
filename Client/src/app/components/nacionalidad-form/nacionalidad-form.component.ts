import { Component, OnInit, HostBinding } from '@angular/core';
import { Nacionalidades } from 'src/app/models/Nacionalidades';
import { NacionalidadesService } from 'src/app/services/nacionalidades.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nacionalidad-form',
  templateUrl: './nacionalidad-form.component.html',
  styleUrls: ['./nacionalidad-form.component.css']
})
export class NacionalidadFormComponent implements OnInit {
  nacionalidad: Nacionalidades = {
    Id_Nacionalidad:0,
    Nacionalidad: ""
  };

  edit:boolean=false;

  constructor(private nacionalidadesService: NacionalidadesService, private router:Router, private activatedRoute:ActivatedRoute)
  {
  }

  ngOnInit(): void 
  {
    const params=this.activatedRoute.snapshot.params;
    if(params['id'])
    {
      this.nacionalidadesService.getNacionalidad(params['id']).subscribe(
        res=>{
          console.log(res);
          this.nacionalidad=res;
          this.edit=true;
        },
        err=>console.error(err)
      );
    }
  }
  saveNewNacionalidad(){
    delete this.nacionalidad.Id_Nacionalidad;

    this.nacionalidadesService.saveNacionalidad(this.nacionalidad).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/Nacionalidades']);

        // Mostrar mensaje de confirmación
        Swal.fire({
          title: 'Nacionalidad creada exitosamente',
          icon: 'success',
          timer: 1000, // El mensaje se cerrará automáticamente después de 3 segundos
          showConfirmButton: false
      });
      },
      err=>console.error(err)
    );
  }

  updateNacionalidad()
  {
    
    this.nacionalidadesService.updateNacionalidad(this.nacionalidad.Id_Nacionalidad!,this.nacionalidad).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/Nacionalidades']);

        Swal.fire({
          title: 'Nacionalidad editada exitosamente',
          icon: 'success',
          timer: 1000, // El mensaje se cerrará automáticamente después de 3 segundos
          showConfirmButton: false
      });
      },
      err=>console.error(err)
    );
  }

}
