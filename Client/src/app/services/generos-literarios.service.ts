import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Generos_Literarios } from '../models/Generos_Literarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosLiterariosService 
{

  constructor(private http:HttpClient) { }

  getGeneros_Literarios()
  {
    return this.http.get('http://localhost:3000/GenerosLiterarios');
  }
  getGenero_Literario(id:string)
  {
    return this.http.get('http://localhost:3000/GenerosLiterarios/'+id);
  }

  saveGenero_Literario(generos_literarios: Generos_Literarios)
  {
    return this.http.post('http://localhost:3000/GenerosLiterarios', generos_literarios);
  }

  deleteGenero_Literario(id:string)
  {
    return this.http.delete('http://localhost:3000/GenerosLiterarios/'+id);
  }

  updateGenero_Literario(id:string | number, generos_literarios: Generos_Literarios):Observable<Generos_Literarios>
  {
    return this.http.put('http://localhost:3000/GenerosLiterarios/'+id,generos_literarios);
  }

  getEstilos()
  {
    return this.http.get('http://localhost:3000/EstilosLiterarios');
  }

 
}

