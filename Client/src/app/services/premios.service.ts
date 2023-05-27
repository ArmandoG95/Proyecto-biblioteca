import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Premio } from '../models/Premios';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PremiosService {
  API_URI = 'http://localhost:3000'

  constructor(private http: HttpClient) {
  }
  getAll() {
    return this.http.get(`${this.API_URI}/Premios`);
  }

  get(id: string) {
    //${id} interpolación de cadenas
    return this.http.get(`${this.API_URI}/Premios/${id}`);
  }

  save(premio: Premio) {
    return this.http.post(`${this.API_URI}/Premios`, premio);
  }

  delete(id: string) {
    return this.http.delete(`${this.API_URI}/Premios/${id}`);
  }

  update(id: string | number, premio: Premio): Observable<Premio> {
    return this.http.put(`${this.API_URI}/Premios/${id}`, premio)
  }

  getLugares(){
    return this.http.get(`${this.API_URI}/Lugares`);
  }
  
}
