import { Component, HostBinding, OnInit } from '@angular/core';
import { LenguajesService } from 'src/app/services/lenguajes.service';
import { Lenguaje } from 'src/app/models/Lenguaje';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lenguaje-form',
  templateUrl: './lenguaje-form.component.html',
  styleUrls: ['./lenguaje-form.component.css']
})
export class LenguajeFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  lenguaje: Lenguaje =
    {
      Id_Lenguaje: 0,
      Lenguaje: ''
    };

  edit: boolean = false;

  constructor(private lenguajesService: LenguajesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.lenguajesService.getLenguaje(params['id']).subscribe
        (
          res => {
            console.log(res);
            this.lenguaje = res;
            this.edit = true;
          },
          err => console.error(err)
        )
    }
  }

  saveNewLenguaje() {
    delete this.lenguaje.Id_Lenguaje;

    this.lenguajesService.saveLenguaje(this.lenguaje).subscribe
      (
        res => {
          console.log(res);
          this.router.navigate(['/lenguajes']);
        },
        err => console.error(err)
      );
  }

  updateLenguaje() {
    this.lenguajesService.updateLenguaje(this.lenguaje.Id_Lenguaje!, this.lenguaje).subscribe
      (
        res => {
          console.log(res);
          this.router.navigate(['/lenguajes']);
        },
        err => console.error(err)
      );
  }
}
