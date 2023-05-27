import { Component } from '@angular/core';
import { Premio } from 'src/app/models/Premios';
import { PremiosService } from 'src/app/services/premios.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-premios-form',
  templateUrl: './premios-form.component.html',
  styleUrls: ['./premios-form.component.css']
})
export class PremiosFormComponent {
  premio: Premio = {
    Id_Premio: 0,
    Premio: '',
    Premio_Categoria: '',
    Otorgado_Por: '',
    Primera_Entrega: new Date(),
    Id_Lugar: 0
  }
  lugares: any = [];
  selectedId: string = '';
  edit: boolean = false;

  ngOnInit(): void {
    this.getLugares();
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.premiosService.get(params['id']).subscribe(
        res => {
          console.log(res);
          this.premio = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }
  constructor(private premiosService: PremiosService, private activatedRoute: ActivatedRoute, private router: Router) {

  }



  update(): void {
    this.premiosService.update(this.premio.Id_Premio!, this.premio).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/premios']);
      },
      err => console.error(err)
    );
  }

  saveNewPremio() {
    delete this.premio.Id_Premio;

    this.premiosService.save(this.premio).subscribe(
      res => { console.log(res) 
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

  getLugares(){
    this.premiosService.getLugares().subscribe(
      res => this.lugares = res,
      err => console.error(err)
    );
  }
}
