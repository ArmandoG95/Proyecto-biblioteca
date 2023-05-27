"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.libroController = void 0;
const Database_1 = __importDefault(require("../Database"));
class LibroController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const libros = yield Database_1.default.query(`Ver_Libro_Sin_Lenguaje`);
            return res.json(libros.recordset);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Database_1.default.query(`exec Insertar_Libro @Nombre_Libro = '${req.body.Nombre_Libro}', @ISBN = '${req.body.ISBN}', @Id_Autor = ${req.body.Id_Autor}, @Id_Editorial = ${req.body.Id_Editorial}, @Edicion = '${req.body.Edicion}', @Id_Genero_Literario = ${req.body.Id_Genero_Literario}, @Id_Tipo_Tapa = ${req.body.Id_Tipo_Tapa}, @Numero_Paginas = '${req.body.Numero_Paginas}', @Fecha_Publicacion = '${req.body.Fecha_Publicacion}', @Sinopsis = '${req.body.Sinopsis}'`);
            console.log(req);
            res.json({ 'Text': 'Libros creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`exec Borrar_Libro @Id_Libro = ${id}`);
            res.json({ 'Text': 'Libro borrado: ' + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`exec Actualizar_Libro @Id_Libro = ${id}, @Nombre_Libro = '${req.body.Nombre_Libro}', @ISBN = '${req.body.ISBN}', @Id_Autor = ${req.body.Id_Autor}, @Id_Editorial = ${req.body.Id_Editorial}, @Edicion = '${req.body.Edicion}', @Id_Genero_Literario = ${req.body.Id_Genero_Literario}, @Id_Tipo_Tapa = ${req.body.Id_Tipo_Tapa}, @Numero_Paginas = '${req.body.Numero_Paginas}', @Fecha_Publicacion = '${req.body.Fecha_Publicacion}', @Sinopsis = '${req.body.Sinopsis}'`);
            res.json({ 'Text': 'Libro actualizado: ' + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const libro = yield Database_1.default.query(`exec Ver_Detalle_Libro @Id_Libro = ${id}`);
            if (libro.rowsAffected > 0) {
                console.log(libro.recordset[0]);
                return res.json(libro.recordset[0]);
            }
            else {
                res.status(404).json({ 'Text': 'El libro no existe: ' + id });
            }
        });
    }
}
exports.libroController = new LibroController();
exports.default = exports.libroController;
