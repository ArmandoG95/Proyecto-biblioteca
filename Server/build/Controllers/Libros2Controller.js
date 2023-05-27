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
exports.libros2Controller = void 0;
const Database_1 = __importDefault(require("../Database"));
class Libros2Controller {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const libros = yield Database_1.default.query(`select L.*, A.Nombre, A.Apellidp_Paterno, E.Editorial, GL.Genero_Literario, TP.Tipo_Tapa
        from Libros2 L, Autores A, Editoriales E, Generos_Literarios GL, Tipos_Tapas TP
        where  L.Id_Autor = A.Id_Autor AND L.Id_Editorial = E.Id_Editorial AND L.Id_Genero_Literario = GL.Id_Genero_Literario AND L.Id_Tipo_Tapa = TP.Id_Tipo_Tapa`);
            return res.json(libros.recordset);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Database_1.default.query(`insert into Libros2
		values ('${req.body.ISBN}', '${req.body.Nombre_Libro}', ${req.body.Id_Autor}, ${req.body.Id_Editorial}, '${req.body.Edicion}',
		${req.body.Id_Genero_Literario}, ${req.body.Id_Tipo_Tapa}, '${req.body.Numero_Paginas}', '${req.body.Fecha_Publicacion}',
		'${req.body.Sinopsis}', '${req.body.Imagen}')`);
            console.log(req);
            res.json({ 'Text': 'Libro creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`DELETE FROM Libros2 Where Id_Libro = ${id}`);
            res.json({ 'Text': 'Libro borrado: ' + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`UPDATE Libros2 SET 
        Nombre_Libro = '${req.body.Nombre_Libro}', ISBN = '${req.body.ISBN}', Id_Autor = ${req.body.Id_Autor}, Id_Editorial = ${req.body.Id_Editorial}, Edicion = '${req.body.Edicion}', Id_Genero_Literario = ${req.body.Id_Genero_Literario}, Id_Tipo_Tapa = ${req.body.Id_Tipo_Tapa}, Numero_Paginas = '${req.body.Numero_Paginas}', Fecha_Publicacion = '${req.body.Fecha_Publicacion}', Sinopsis = '${req.body.Sinopsis}', Imagen = '${req.body.Imagen}'
		where Id_Libro = ${id}`);
            res.json({ 'Text': 'Libro actualizado: ' + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const libro = yield Database_1.default.query(`SELECT * FROM Libros2 WHERE Id_Libro = ${id}`);
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
exports.libros2Controller = new Libros2Controller();
exports.default = exports.libros2Controller;
