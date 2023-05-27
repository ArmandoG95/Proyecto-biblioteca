import express, { Application } from 'express'
import morgan from 'morgan';
import cors from 'cors';

import lenguajeRoutes from './Routes/lenguajeRoutes';
import editorialRoutes from './Routes/editorialRoutes';
import libroRoutes from './Routes/libroRoutes';
import libro_lenguajeRoutes from './Routes/libro_lenguajeRoutes';
import lenguaje_boyceRoutes from './Routes/lenguaje_boyceRoutes';
import lugaresRoutes from './Routes/LugaresRoutes';
import premiosRoutes from './Routes/PremiosRoutes';
import nacionalidades_Routes from './Routes/Nacionalidades_Routes';
import tipos_Tapas_Routes from './Routes/Tipos_Tapas_Routes';
import usuarios_Routes from './Routes/Usuarios_Routes';
import generos_Literarios_Routes from './Routes/Generos_Literarios_Routes';
import autoresRoutes from './Routes/AutoresRoutes';
import estilosLiterariosRoutes from './Routes/EstilosLiterariosRoutes';
import PremiosAutoresRoutes from './Routes/PremiosAutoresRoutes';
import clientes_Routes from './Routes/Clientes_Routes';
import Libros2Routes from './Routes/Libros2Routes';
class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servido en el puerto:', this.app.get('port'));
        });
    }

    routes(): void {
        this.app.use('/lenguajes', lenguajeRoutes);
        this.app.use('/editoriales', editorialRoutes);
        this.app.use('/libros', libroRoutes);
        this.app.use('/libros_Lenguajes', libro_lenguajeRoutes);
        this.app.use('/lenguajes_boyce', lenguaje_boyceRoutes);
        this.app.use('/Lugares', lugaresRoutes);
        this.app.use('/Premios', premiosRoutes);
        this.app.use('/Nacionalidades', nacionalidades_Routes);
        this.app.use('/Tipos_Tapas', tipos_Tapas_Routes);
        this.app.use('/Usuarios', usuarios_Routes);
        this.app.use('/GenerosLiterarios',generos_Literarios_Routes);
        this.app.use('/Clientes', clientes_Routes);

        //Emigdio 
        this.app.use('/Autores', autoresRoutes);
        this.app.use('/EstilosLiterarios', estilosLiterariosRoutes);
        this.app.use('/PremiosAutores', PremiosAutoresRoutes);
        this.app.use('/libros2',Libros2Routes);

    }
}

// Instacia de servidor
const server = new Server();

// Instanciamos el servidor, entramos al objeto y despues a start
server.start();