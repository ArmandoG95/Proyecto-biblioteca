import { Component, OnInit, HostBinding } from '@angular/core';
import { Tipos_Tapas } from 'src/app/models/Tipos_Tapas';
import { TiposTapasService } from 'src/app/services/tipos-tapas.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipo-tapa-form',
  templateUrl: './tipo-tapa-form.component.html',
  styleUrls: ['./tipo-tapa-form.component.css']
})
export class TipoTapaFormComponent implements OnInit {
  tipo_tapa: Tipos_Tapas = {
    id_tipo_tapa:0,
    Tipo_Tapa: ""
  };
  
  edit:boolean=false;

  constructor(private tiposTapasService: TiposTapasService, private router:Router, private activatedRoute:ActivatedRoute)
  {
  }

  ngOnInit(): void 
  {
    const params=this.activatedRoute.snapshot.params;
    if(params['id_tipo_tapa'])
    {
      this.tiposTapasService.getTipo_Tapa(params['id_tipo_tapa']).subscribe(
        res=>{
          console.log(res);
          this.tipo_tapa=res;
          this.edit=true;
        },
        err=>console.error(err)
      );
    }
  }
  saveNewTipo_Tapa(){
    delete this.tipo_tapa.id_tipo_tapa;

    this.tiposTapasService.saveTipo_Tapa(this.tipo_tapa).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/Tipos_Tapas']);

        // Mostrar mensaje de confirmación
        Swal.fire({
          title: 'Tapa creada exitosamente',
          icon: 'success',
          timer: 1000, // El mensaje se cerrará automáticamente después de 3 segundos
          showConfirmButton: false
      });
      },
      err=>console.error(err)
    );
  }

  updateTipo_Tapa()
  {
    
    this.tiposTapasService.updateTipo_Tapa(this.tipo_tapa.id_tipo_tapa!,this.tipo_tapa).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/Tipos_Tapas']);

        Swal.fire({
          title: 'Tapa editada exitosamente',
          icon: 'success',
          timer: 1000, // El mensaje se cerrará automáticamente después de 3 segundos
          showConfirmButton: false
      });
      },
      err=>console.error(err)
    );
  }
}
