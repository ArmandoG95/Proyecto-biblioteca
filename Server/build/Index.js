"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const lenguajeRoutes_1 = __importDefault(require("./Routes/lenguajeRoutes"));
const editorialRoutes_1 = __importDefault(require("./Routes/editorialRoutes"));
const libroRoutes_1 = __importDefault(require("./Routes/libroRoutes"));
const libro_lenguajeRoutes_1 = __importDefault(require("./Routes/libro_lenguajeRoutes"));
const lenguaje_boyceRoutes_1 = __importDefault(require("./Routes/lenguaje_boyceRoutes"));
const LugaresRoutes_1 = __importDefault(require("./Routes/LugaresRoutes"));
const PremiosRoutes_1 = __importDefault(require("./Routes/PremiosRoutes"));
const Nacionalidades_Routes_1 = __importDefault(require("./Routes/Nacionalidades_Routes"));
const Tipos_Tapas_Routes_1 = __importDefault(require("./Routes/Tipos_Tapas_Routes"));
const Usuarios_Routes_1 = __importDefault(require("./Routes/Usuarios_Routes"));
const Generos_Literarios_Routes_1 = __importDefault(require("./Routes/Generos_Literarios_Routes"));
const AutoresRoutes_1 = __importDefault(require("./Routes/AutoresRoutes"));
const EstilosLiterariosRoutes_1 = __importDefault(require("./Routes/EstilosLiterariosRoutes"));
const PremiosAutoresRoutes_1 = __importDefault(require("./Routes/PremiosAutoresRoutes"));
const Clientes_Routes_1 = __importDefault(require("./Routes/Clientes_Routes"));
const Libros2Routes_1 = __importDefault(require("./Routes/Libros2Routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servido en el puerto:', this.app.get('port'));
        });
    }
    routes() {
        this.app.use('/lenguajes', lenguajeRoutes_1.default);
        this.app.use('/editoriales', editorialRoutes_1.default);
        this.app.use('/libros', libroRoutes_1.default);
        this.app.use('/libros_Lenguajes', libro_lenguajeRoutes_1.default);
        this.app.use('/lenguajes_boyce', lenguaje_boyceRoutes_1.default);
        this.app.use('/Lugares', LugaresRoutes_1.default);
        this.app.use('/Premios', PremiosRoutes_1.default);
        this.app.use('/Nacionalidades', Nacionalidades_Routes_1.default);
        this.app.use('/Tipos_Tapas', Tipos_Tapas_Routes_1.default);
        this.app.use('/Usuarios', Usuarios_Routes_1.default);
        this.app.use('/GenerosLiterarios', Generos_Literarios_Routes_1.default);
        this.app.use('/Clientes', Clientes_Routes_1.default);
        //Emigdio 
        this.app.use('/Autores', AutoresRoutes_1.default);
        this.app.use('/EstilosLiterarios', EstilosLiterariosRoutes_1.default);
        this.app.use('/PremiosAutores', PremiosAutoresRoutes_1.default);
        this.app.use('/libros2', Libros2Routes_1.default);
    }
}
// Instacia de servidor
const server = new Server();
// Instanciamos el servidor, entramos al objeto y despues a start
server.start();
