import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LenguajeFormComponent } from './components/lenguaje-form/lenguaje-form.component';
import { LenguajeListComponent } from './components/lenguaje-list/lenguaje-list.component';
import { EditorialFormComponent } from './components/editorial-form/editorial-form.component';
import { EditorialListComponent } from './components/editorial-list/editorial-list.component';
import { LibroFormComponent } from './components/libro-form/libro-form.component';
import { LibroListComponent } from './components/libro-list/libro-list.component';
import { LugaresListComponent } from './components/lugares-list/lugares-list.component';
import { LugaresFormComponent } from './components/lugares-form/lugares-form.component';
import { PremiosListComponent } from './components/premios-list/premios-list.component';
import { PremiosFormComponent } from './components/premios-form/premios-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginListComponent } from './components/login-list/login-list.component';
import { NacionalidadListComponent } from './components/nacionalidad-list/nacionalidad-list.component';
import { NacionalidadFormComponent } from './components/nacionalidad-form/nacionalidad-form.component';
import { GenerosLiterariosFormComponent } from './components/generos-literarios-form/generos-literarios-form.component';
import { GenerosLiterariosListComponent } from './components/generos-literarios-list/generos-literarios-list.component';
import { TipoTapaFormComponent } from './components/tipo-tapa-form/tipo-tapa-form.component';
import { TipoTapaListComponent } from './components/tipo-tapa-list/tipo-tapa-list.component';

import { EditorialesService } from './services/editoriales.service';
import { LenguajesService } from './services/lenguajes.service';
import { LibrosService } from './services/libros.service';
import { LibrosLenguajesService } from './services/libros-lenguajes.service';
import { LenguajesBoyceService } from './services/lenguajes-boyce.service';
import { LugaresService } from './services/lugares.service';
import { PremiosService } from './services/premios.service';
import { LoginService } from './services/login.service';
import { NacionalidadesService } from './services/nacionalidades.service';
import { LibroDetailComponent } from './components/libro-detail/libro-detail.component';
import { GenerosLiterariosService } from './services/generos-literarios.service';
import { TiposTapasService } from './services/tipos-tapas.service';
import { AutoresFormComponent } from './components/autores-form/autores-form.component';
import { AutoresListComponent } from './components/autores-list/autores-list.component';
import { AutoresService } from './services/autores.service';
import { EstilosLiterariosFormComponent } from './components/estilos-literarios-form/estilos-literarios-form.component';
import { EstilosLiterariosListComponent } from './components/estilos-literarios-list/estilos-literarios-list.component';
import { EstilosLiterariosService } from './services/estilos-literarios.service';
import { PremiosAutoresFormComponent } from './components/premios-autores-form/premios-autores-form.component';
import { PremiosAutoresListComponent } from './components/premios-autores-list/premios-autores-list.component';
import { PremiosAutoresService } from './services/premios-autores.service';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ClientesService } from './services/clientes.service';
import { Libros2FormComponent } from './components/libros2-form/libros2-form.component';
import { Libros2ListComponent } from './components/libros2-list/libros2-list.component';
import { Libros2Service } from './services/libros2.service';
import { AppVideoComponent } from './components/app-video/app-video.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LenguajeFormComponent,
    LenguajeListComponent,
    EditorialFormComponent,
    EditorialListComponent,
    LibroFormComponent,
    LibroListComponent,
    LugaresListComponent,
    LugaresFormComponent,
    PremiosListComponent,
    PremiosFormComponent,
    LoginFormComponent,
    LoginListComponent,
    NacionalidadListComponent,
    NacionalidadFormComponent,
    LibroDetailComponent,
    GenerosLiterariosFormComponent,
    GenerosLiterariosListComponent,
    TipoTapaFormComponent,
    TipoTapaListComponent,
    AutoresFormComponent,
    AutoresListComponent,
    EstilosLiterariosFormComponent,
    EstilosLiterariosListComponent,
    PremiosAutoresFormComponent,
    PremiosAutoresListComponent,
    ClienteListComponent,
    ClienteFormComponent,
    Libros2FormComponent,
    Libros2ListComponent,
    AppVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LenguajesService,
    EditorialesService,
    LibrosService,
    LibrosLenguajesService,
    LenguajesBoyceService,
    LugaresService,
    PremiosService,
    LoginService,
    NacionalidadesService,
    GenerosLiterariosService,
    TiposTapasService,
    AutoresService,
    EstilosLiterariosService,
    PremiosAutoresService,
    ClientesService,
    Libros2Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
