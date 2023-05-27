import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lenguaje_Boyce } from '../models/Lenguaje_Boyce';
import { Observable } from 'rxjs';

const direccion = 'http://localhost:3000/lenguajes_boyce';

@Injectable({
  providedIn: 'root'
})
export class LenguajesBoyceService {

  constructor(private http: HttpClient) { }

  getLenguajes(): Observable<any> {
    return this.http.get(direccion);
  }

  getLenguaje(id: string): Observable<any> {
    return this.http.get(`${direccion}/${id}`);
  }

  saveLenguaje(lenguaje_Boyce: Lenguaje_Boyce): Observable<any> {
    return this.http.post(direccion, lenguaje_Boyce);
  }

  deleteLenguaje(id: string): Observable<any> {
    return this.http.delete(`${direccion}/${id}`);
  }

  updateLenguaje(id: string | number, lenguaje_Boyce: Lenguaje_Boyce): Observable<Lenguaje_Boyce> {
    return this.http.put(`${direccion}/${id}`, lenguaje_Boyce);
  }
}
