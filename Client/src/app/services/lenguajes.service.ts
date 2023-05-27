import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lenguaje } from '../models/Lenguaje';
import { Observable } from 'rxjs';

const direccion = 'http://localhost:3000/lenguajes';

@Injectable({
  providedIn: 'root'
})
export class LenguajesService {

  constructor(private http: HttpClient) { }

  getLenguajes(): Observable<any> {
    return this.http.get(direccion);
  }

  getLenguaje(id: string): Observable<any> {
    return this.http.get(`${direccion}/${id}`);
  }

  saveLenguaje(lenguaje: Lenguaje): Observable<any> {
    return this.http.post(direccion, lenguaje);
  }

  deleteLenguaje(id: string): Observable<any> {
    return this.http.delete(`${direccion}/${id}`);
  }

  updateLenguaje(id: string | number, lenguaje: Lenguaje): Observable<Lenguaje> {
    return this.http.put(`${direccion}/${id}`, lenguaje);
  }
}
