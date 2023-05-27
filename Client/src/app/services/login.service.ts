import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../models/Usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //API_URI = 'http://localhost:3000'

  constructor(private http:HttpClient) { }

  login(usuario:Usuarios)
  {
    return this.http.post('http://localhost:3000/usuarios/login',usuario);
  }
  getUsuarios()
  {
    return this.http.get('http://localhost:3000/usuarios')
  }
}
