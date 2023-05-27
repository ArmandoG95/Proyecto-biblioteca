import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro2 } from '../models/Libros2';
import { Observable } from 'rxjs';

const direccion = 'http://localhost:3000/Libros2';

@Injectable({
  providedIn: 'root'
})
export class Libros2Service {

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

  saveLibro(libro2: Libro2): Observable<any> {
    return this.http.post(direccion, libro2);
  }

  deleteLibro(id: string): Observable<any> {
    return this.http.delete(`${direccion}/${id}`);
  }

  updateLibro(id: string | number, libro2: Libro2): Observable<Libro2> {
    return this.http.put(`${direccion}/${id}`, libro2);
  }
}
