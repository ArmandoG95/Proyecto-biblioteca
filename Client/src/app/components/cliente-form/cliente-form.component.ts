import { Component, OnInit, HostBinding } from '@angular/core';
import { Clientes } from 'src/app/models/Clientes';
import { ClientesService } from 'src/app/services/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  cliente: Clientes = {
    Id_Cliente:0,
    Nombre: "",
    Apellido_Paterno: "",
    Apellido_Materno: "",
    Colonia: "",
    Calle: "",
    Numero: "",
    Correo_Electronico: "",
    Celular: "",
  }
  
  edit:boolean=false;
  
  constructor(private clientesService: ClientesService, private router:Router, private activatedRoute:ActivatedRoute)
    {
    }
  
    ngOnInit(): void 
    {
      const params=this.activatedRoute.snapshot.params;
      if(params['Id_Cliente'])
      {
        this.clientesService.getCliente(params['Id_Cliente']).subscribe(
          res=>{
            console.log(res);
            this.cliente=res;
            this.edit=true;
          },
          err=>console.error(err)
        );
      }
    }
  
    saveNewCliente(){
      delete this.cliente.Id_Cliente;
  
      this.clientesService.saveCliente(this.cliente).subscribe(
          res => {
              console.log(res);
              this.router.navigate(['/Clientes']);
  
              // Mostrar mensaje de confirmación
              Swal.fire({
                  title: 'Cliente creado exitosamente',
                  icon: 'success',
                  timer: 1000, // El mensaje se cerrará automáticamente después de 3 segundos
                  showConfirmButton: false
              });
          },
          err => console.error(err)
      );
  }
  
    updateClienteM()
    {
      this.clientesService.updateCliente(this.cliente.Id_Cliente!,this.cliente).subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/Clientes']);

          Swal.fire({
                  title: 'Cliente editado exitosamente',
                  icon: 'success',
                  timer: 1000, // El mensaje se cerrará automáticamente después de 3 segundos
                  showConfirmButton: false
              });
        },
        err=>console.error(err)
      );
    }
  }
  
