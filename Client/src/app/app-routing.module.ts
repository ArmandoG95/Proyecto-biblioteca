import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditorialFormComponent } from './components/editorial-form/editorial-form.component'
import { EditorialListComponent } from './components/editorial-list/editorial-list.component'
import { LenguajeFormComponent } from './components/lenguaje-form/lenguaje-form.component'
import { LenguajeListComponent } from './components/lenguaje-list/lenguaje-list.component'
import { LibroFormComponent } from './components/libro-form/libro-form.component'
import { LibroListComponent } from './components/libro-list/libro-list.component'
import { LibroDetailComponent } from './components/libro-detail/libro-detail.component'
import { LugaresFormComponent } from './components/lugares-form/lugares-form.component'
import { LugaresListComponent } from './components/lugares-list/lugares-list.component'
import { PremiosFormComponent } from './components/premios-form/premios-form.component'
import { PremiosListComponent } from './components/premios-list/premios-list.component'
import { LoginFormComponent } from './components/login-form/login-form.component'
import { LoginListComponent } from './components/login-list/login-list.component'
import { NacionalidadFormComponent } from './components/nacionalidad-form/nacionalidad-form.component'
import { NacionalidadListComponent } from './components/nacionalidad-list/nacionalidad-list.component'
import { GenerosLiterariosFormComponent } from './components/generos-literarios-form/generos-literarios-form.component';
import { GenerosLiterariosListComponent } from './components/generos-literarios-list/generos-literarios-list.component';
import { TipoTapaFormComponent } from './components/tipo-tapa-form/tipo-tapa-form.component';
import { TipoTapaListComponent } from './components/tipo-tapa-list/tipo-tapa-list.component';
import { AutoresListComponent } from './components/autores-list/autores-list.component';
import { AutoresFormComponent } from './components/autores-form/autores-form.component';
import { EstilosLiterariosListComponent } from './components/estilos-literarios-list/estilos-literarios-list.component';
import { EstilosLiterariosFormComponent } from './components/estilos-literarios-form/estilos-literarios-form.component';
import { PremiosAutoresListComponent } from './components/premios-autores-list/premios-autores-list.component';
import { PremiosAutoresFormComponent } from './components/premios-autores-form/premios-autores-form.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { Libros2FormComponent } from './components/libros2-form/libros2-form.component';
import { Libros2ListComponent } from './components/libros2-list/libros2-list.component';




const routes: Routes = [
  {
    path: '',
    redirectTo: '/login/add',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginListComponent
  },
  {
    path: 'login/add',
    component: LoginFormComponent
  },
  {
    path: 'lenguajes',
    component: LenguajeListComponent
  },
  {
    path: 'lenguajes/add',
    component: LenguajeFormComponent
  },
  {
    path: 'lenguajes/edit/:id',
    component: LenguajeFormComponent
  },
  {
    path: 'editoriales',
    component: EditorialListComponent
  },
  {
    path: 'editoriales/add',
    component: EditorialFormComponent
  },
  {
    path: 'editoriales/edit/:id',
    component: EditorialFormComponent
  },
  {
    path: 'libros',
    component: LibroListComponent
  },
  {
    path: 'libros/add',
    component: LibroFormComponent
  },
  {
    path: 'libros/edit/:id',
    component: LibroFormComponent
  },
  {
    path: 'libros/detail/:id',
    component: LibroDetailComponent
  },
  {
    path: 'lugares',
    component: LugaresListComponent
  },
  {
    path: 'lugares/add',
    component: LugaresFormComponent
  },
  {
    path: 'lugares/edit/:id',
    component: LugaresFormComponent
  },
  {
    path: 'premios',
    component: PremiosListComponent
  },
  {
    path: 'premios/add',
    component: PremiosFormComponent
  },
  {
    path: 'premios/edit/:id',
    component: PremiosFormComponent
  },
  {
    path: 'Nacionalidades',
    component: NacionalidadListComponent
  },
  {
    path: 'Nacionalidades/add',
    component: NacionalidadFormComponent
  },
  {
    path: 'Nacionalidades/edit/:id',
    component: NacionalidadFormComponent
  },
  //Generos_Literarios
  { path: '', redirectTo: '/GenerosLiterarios', pathMatch: 'full' },
  { path: 'GenerosLiterarios', component: GenerosLiterariosListComponent },
  { path: 'GenerosLiterarios/add', component: GenerosLiterariosFormComponent },
  { path: 'GenerosLiterarios/edit/:Id_Genero_Literario', component: GenerosLiterariosFormComponent },
  //tipos_tapas
  { path: '', redirectTo: '/Tipos_Tapas', pathMatch: 'full', },
  { path: 'Tipos_Tapas', component: TipoTapaListComponent },
  { path: 'Tipos_Tapas/add', component: TipoTapaFormComponent },
  { path: 'Tipos_Tapas/edit/:id_tipo_tapa', component: TipoTapaFormComponent },

  //Autores
  {path: '', redirectTo: '/Autores', pathMatch: 'full'},
  {path: 'Autores', component: AutoresListComponent},
  {path: 'Autores/add', component: AutoresFormComponent},
  {path: 'Autores/edit/:Id_Autor', component: AutoresFormComponent},

  //Rutas de EstilosLiterarios
  {path:'', redirectTo:'/EstilosLiterarios',pathMatch:'full'},
  {path: 'EstilosLiterarios', component: EstilosLiterariosListComponent},
  {path: 'EstilosLiterarios/add', component: EstilosLiterariosFormComponent}, 
  {path: 'EstilosLiterarios/edit/:Id_Estilo_Literario', component: EstilosLiterariosFormComponent},

  //Rutas de Premios Autores
  {path: '', redirectTo: '/PremiosAutores', pathMatch: 'full'},
  {path: 'PremiosAutores', component: PremiosAutoresListComponent},
  {path: 'PremiosAutores/add', component: PremiosAutoresFormComponent},
  {path: 'PremiosAutores/edit/:Id_PremioAutor', component: PremiosAutoresFormComponent},
  
  //Clientes
  {path: '', redirectTo: '/Clientes',pathMatch: 'full',},
  {path: 'Clientes',component: ClienteListComponent},
  {path: 'Clientes/add',component: ClienteFormComponent},
  {path: 'Clientes/edit/:Id_Cliente',component: ClienteFormComponent},

  //libro2
  {path: '', redirectTo: '/libros2',pathMatch: 'full',},
  {path: 'libros2',component: Libros2ListComponent},
  {path: 'libros2/add',component: Libros2FormComponent},
  {path: 'libros2/edit/:Id_Libro',component: Libros2FormComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
