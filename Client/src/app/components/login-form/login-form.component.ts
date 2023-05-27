import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/Usuarios';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-login-forms',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  prohibitedWords: string[] = ['Create', 'create', 'CREATE', 'select', 'Select', 'SELECT', 'from', 'From', 'FROM',

    'Create', 'create', ',Create', 'Insert', 'insert', 'INSERT', 'update', 'Update', 'UPDATE', 'Delete', 'delete', 'DELETE', 'AND', 'OR', 'NOT', 'IN',
    'EXEC', 'EXECUTE', 'Procedure', 'Proc', 'Funtion', 'trigger', 'view', 'where'];

  error: string = ' ';
  success = false;
  usuario: Usuarios = {
    id_usuario: 0,
    Usuario: "",
    password: "",
    id_Rol: 0
  };
  videoUrl: SafeResourceUrl;
  constructor(private loginService: LoginService, private router: Router,private sanitizer: DomSanitizer) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets\videos\video.mp4');

    this.success = false;
  }
  ngOnInit(): void {

  }
  login() {

    if (!this.validateInput()) {
      this.error = 'No se permiten palabras prohibidas en el nombre de usuario o contraseña.';
      return;
    }
    delete this.usuario.id_usuario;

    this.loginService.login(this.usuario).subscribe(

      res => {
        console.log(res);
        this.success = true;
        this.router.navigate(['/libros2']);

      },
      err => {
        console.error(err);
        this.error = 'Los datos de inicio de sesión son incorrectos.';
      }
    )
  }

  validateInput(): boolean {
    for (let word of this.prohibitedWords) {
      if (this.usuario?.Usuario?.toLowerCase().includes(word) || this.usuario?.password?.toLowerCase().includes(word)) {
        return false;
      }
    }
    return true;
  }



  onSubmit() {
    console.log('Submitted:', this.usuario);
  }
}
