import { Component, OnInit, HostBinding } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Usuarios } from 'src/app/models/Usuarios';

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.css']
})
export class LoginListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  usuarios: any = [];
  usuario: Usuarios = {
    id_usuario: 0,
    Usuario: "",
    password: "",
    id_Rol: 0
  };

  constructor(private loginService: LoginService) { } ngOnInit(): void {
    this.loginService.getUsuarios().subscribe(
      res => this.usuarios = res,
      err => console.error(err)
    );
  }

}
