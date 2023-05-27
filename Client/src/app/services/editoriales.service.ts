import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Editorial } from '../models/Editorial';
import { Observable } from 'rxjs';

const direccion = 'http://localhost:3000/editoriales';

@Injectable({
  providedIn: 'root'
})
export class EditorialesService {

  constructor(private http: HttpClient) { }

  getEditoriales(): Observable<any> {
    return this.http.get(direccion);
  }

  getEditorial(id: string): Observable<any> {
    return this.http.get(`${direccion}/${id}`);
  }

  saveEditorial(editorial: Editorial): Observable<any> {
    return this.http.post(direccion, editorial);
  }

  deleteEditorial(id: string): Observable<any> {
    return this.http.delete(`${direccion}/${id}`);
  }

  updateEditorial(id: string | number, editorial: Editorial): Observable<Editorial> {
    return this.http.put(`${direccion}/${id}`, editorial);
  }
}
