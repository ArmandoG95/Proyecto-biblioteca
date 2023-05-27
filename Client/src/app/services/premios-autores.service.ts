import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PremioAutor } from '../models/PremiosAutores';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PremiosAutoresService {

  API_URI = 'http://localhost:3000'

  constructor(private http:HttpClient) {
   }
   getAll()
   {
    return this.http.get(`${this.API_URI}/PremiosAutores`)
   }

   get(id: string){
    //${id} interpolación de cadenas
    return this.http.get(`${this.API_URI}/PremiosAutores/${id}`);
  }

  save(premioAutor:PremioAutor){
    return this.http.post(`${this.API_URI}/PremiosAutores`, premioAutor);
  }

  delete(id:string){
    return this.http.delete(`${this.API_URI}/PremiosAutores/${id}`);
  }

  getPremios(){
    return this.http.get(`${this.API_URI}/Premios`)
  }

  getAutores(){
    return this.http.get(`${this.API_URI}/Autores`)
  }
}
