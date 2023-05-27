import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../models/Libro';
import { Observable } from 'rxjs';

const direccion = 'http://localhost:3000/libros';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http: HttpClient) { }

  getLibros(): Observable<any> {
    return this.http.get(direccion);
  }

  // Llamado de las editoriales 
  getEditoriales(): Observable<any> {
    return this.http.get('http://localhost:3000/editoriales');
  }

  // Llamado de los lenguajes
  getLenguajes(): Observable<any> {
    return this.http.get('http://localhost:3000/lenguajes');
  }

  // Llamado de los generos literarios
  getGeneros_Literarios()
  {
    return this.http.get('http://localhost:3000/GenerosLiterarios');
  }

  // Llamado de los tipos tapas
  getTipos_Tapas()
  {
    return this.http.get('http://localhost:3000/Tipos_Tapas');
  }

  // Llamado de autores
  getAll()
   {
    return this.http.get('http://localhost:3000/Autores')
   }

  getLibro(id: string): Observable<any> {
    return this.http.get(`${direccion}/${id}`);
  }

  saveLibro(libro: Libro): Observable<any> {
    return this.http.post(direccion, libro);
  }

  deleteLibro(id: string): Observable<any> {
    return this.http.delete(`${direccion}/${id}`);
  }

  updateLibro(id: string | number, libro: Libro): Observable<Libro> {
    return this.http.put(`${direccion}/${id}`, libro);
  }
}
