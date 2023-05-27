import { Component, OnInit, HostBinding } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  @HostBinding('class') classes = 'row'
  clientes: any = [];

  constructor(private clientesService: ClientesService) { } ngOnInit(): void {
    this.getClientesP();
  }

  getClientesP() {
    this.clientesService.getClientes().subscribe(
      res => this.clientes = res,
      err => console.error(err)
    );
  }

  deleteClienteP(Id_Cliente: string)
  {
    Swal.fire
    (
      {
        title: '¿Estás seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, borrarlo'
      }
    ).then
    ((result) => 
    {
      if (result.isConfirmed) 
      {
        this.clientesService.deleteCliente(Id_Cliente).subscribe
        (
          res => 
          {
            console.log(res);
            this.getClientesP();
          },
          err => console.error(err)
        );
        Swal.fire
        (
          '¡Borrado!',
          'El cliente ha sido borrado.',
          'success'
        )
      }
    }
    )
  }
}