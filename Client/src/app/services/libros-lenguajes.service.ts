import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro_Lenguaje } from '../models/Libro_Lenguaje';
import { Observable } from 'rxjs';

const direccion = 'http://localhost:3000/libros_Lenguajes';

@Injectable({
  providedIn: 'root'
})
export class LibrosLenguajesService {

  constructor(private http: HttpClient) { }

  getLibros(): Observable<any> {
    return this.http.get(direccion);
  }

  getLibro(id: string): Observable<any> {
    return this.http.get(`${direccion}/${id}`);
  }

  saveLibroLenguaje(libro_Lenguaje: Libro_Lenguaje): Observable<any> {
    return this.http.post(direccion, libro_Lenguaje);
  }

  deleteLibro(id: string): Observable<any> {
    return this.http.delete(`${direccion}/${id}`);
  }

  updateLibro(id: string | number, libro_Lenguaje: Libro_Lenguaje): Observable<Libro_Lenguaje> {
    return this.http.put(`${direccion}/${id}`, libro_Lenguaje);
  }
}
