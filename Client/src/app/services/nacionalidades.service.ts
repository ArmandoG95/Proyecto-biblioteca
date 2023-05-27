import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nacionalidades } from '../models/Nacionalidades';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NacionalidadesService {

  constructor(private http: HttpClient) { }
  getNacionalidades() {
    return this.http.get('http://localhost:3000/Nacionalidades');
  }
  getNacionalidad(id: string) {
    return this.http.get('http://localhost:3000/Nacionalidades/' + id);
  }

  // Insertar una nueva nacionalidad
  saveNacionalidad(nacionalidad: Nacionalidades) {
    return this.http.post('http://localhost:3000/Nacionalidades', nacionalidad);
  }

  deleteNacionalidad(id: string) {
    return this.http.delete('http://localhost:3000/Nacionalidades/' + id);
  }

  updateNacionalidad(id: string | number, nacionalidad: Nacionalidades): Observable<Nacionalidades> {
    return this.http.put('http://localhost:3000/Nacionalidades/' + id, nacionalidad);
  }

}
