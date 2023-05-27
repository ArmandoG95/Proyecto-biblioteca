import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autor } from '../models/Autores';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  API_URI = 'http://localhost:3000'

  constructor(private http:HttpClient) {
   }
   getAll()
   {
    return this.http.get(`${this.API_URI}/Autores`)
   }

   get(id: string){
    //${id} interpolación de cadenas
    return this.http.get(`${this.API_URI}/Autores/${id}`);
  }

  save(autor:Autor){
    return this.http.post(`${this.API_URI}/Autores`, autor);
  }

  delete(id:string){
    return this.http.delete(`${this.API_URI}/Autores/${id}`);
  }

  update(id: string | number, autor:Autor):Observable<Autor>{
    return this.http.put(`${this.API_URI}/Autores/${id}`, autor)
  }

  getNacionalidades(){
    return this.http.get(`${this.API_URI}/Nacionalidades`)
  }
}
