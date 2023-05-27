import { Component } from '@angular/core';
import { Lugar } from 'src/app/models/Lugares';
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { LugaresService } from 'src/app/services/lugares.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-lugares-form',
  templateUrl: './lugares-form.component.html',
  styleUrls: ['./lugares-form.component.css']
})
export class LugaresFormComponent implements OnInit {
  lugar: Lugar = {
    Id_Lugar: 0,
    Lugar: ""
  }

  selectedId: string = '';
  edit: boolean = false;

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.lugaresService.get(params['id']).subscribe(
        res => {
          console.log(res);
          this.lugar = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }
  constructor(private lugaresService: LugaresService, private activatedRoute: ActivatedRoute, private router: Router) {

  }



  update(): void {
    this.lugaresService.update(this.lugar.Id_Lugar!, this.lugar).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/lugares']);
      },
      err => console.error(err)
    );
  }

  saveNewLugar() {
    delete this.lugar.Id_Lugar;

    this.lugaresService.save(this.lugar).subscribe(
      res => { console.log(res) 
      
      // Mostrar mensaje de confirmación
      Swal.fire({
        title: 'Lugar creado exitosamente',
        icon: 'success',
        timer: 3000, // El mensaje se cerrará automáticamente después de 3 segundos
        showConfirmButton: false

    });
      },
      err => console.error(err)
    );
  }
}
