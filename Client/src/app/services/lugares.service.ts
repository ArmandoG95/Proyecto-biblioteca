import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Lugar } from '../models/Lugares';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {
  API_URI = 'http://localhost:3000'

  constructor(private http: HttpClient) {
  }
  getAll() {
    return this.http.get(`${this.API_URI}/Lugares`)
  }

  get(id: string) {
    //${id} interpolación de cadenas
    return this.http.get(`${this.API_URI}/Lugares/${id}`);
  }

  save(lugar: Lugar) {
    return this.http.post(`${this.API_URI}/Lugares`, lugar);
  }

  delete(id: string) {
    return this.http.delete(`${this.API_URI}/Lugares/${id}`);
  }

  update(id: string | number, lugar: Lugar): Observable<Lugar> {
    return this.http.put(`${this.API_URI}/Lugares/${id}`, lugar)
  }
}
