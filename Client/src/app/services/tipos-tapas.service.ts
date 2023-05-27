import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tipos_Tapas } from '../models/Tipos_Tapas';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TiposTapasService {

  constructor(private http:HttpClient) { }
  getTipos_Tapas()
  {
    return this.http.get('http://localhost:3000/Tipos_Tapas');
  }
  getTipo_Tapa(id:string)
  {
    return this.http.get('http://localhost:3000/Tipos_Tapas/'+id);
  }

  saveTipo_Tapa(tipos_Tapas: Tipos_Tapas)
  {
    return this.http.post('http://localhost:3000/Tipos_Tapas', tipos_Tapas);
  }

  deleteTipo_Tapa(id:string)
  {
    return this.http.delete('http://localhost:3000/Tipos_Tapas/'+id);
  }

  updateTipo_Tapa(id:string | number, tipos_Tapas: Tipos_Tapas):Observable<Tipos_Tapas>
  {
    return this.http.put('http://localhost:3000/Tipos_Tapas/'+id,tipos_Tapas);
  }
}