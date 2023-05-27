import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clientes } from '../models/Clientes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }
  getClientes()
  {
    return this.http.get('http://localhost:3000/Clientes');
  }
  getCliente(id:string)
  {
    return this.http.get('http://localhost:3000/Clientes/'+id);
  }

  saveCliente(clientes: Clientes)
  {
    return this.http.post('http://localhost:3000/Clientes', clientes);
  }

  deleteCliente(id:string)
  {
    return this.http.delete('http://localhost:3000/Clientes/'+id);
  }

  updateCliente(id:string | number, clientes: Clientes):Observable<Clientes>
  {
    return this.http.put('http://localhost:3000/Clientes/'+id,clientes);
  }
}
