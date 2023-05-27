import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstiloLiterario } from '../models/EstilosLiterarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstilosLiterariosService {
  API_URI = 'http://localhost:3000'

  constructor(private http:HttpClient) {
   }
   getAll()
   {
    return this.http.get(`${this.API_URI}/EstilosLiterarios`)
   }

   get(id: string){
    //${id} interpolación de cadenas
    return this.http.get(`${this.API_URI}/EstilosLiterarios/${id}`);
  }

  save(estiloLiterario:EstiloLiterario){
    return this.http.post(`${this.API_URI}/EstilosLiterarios`, estiloLiterario);
  }

  delete(id:string){
    return this.http.delete(`${this.API_URI}/EstilosLiterarios/${id}`);
  }

  update(id: string | number, estiloLiterario:EstiloLiterario):Observable<EstiloLiterario>{
    return this.http.put(`${this.API_URI}/EstilosLiterarios/${id}`, estiloLiterario)
  }
}
