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
exports.libro_LenguajeController = void 0;
const Database_1 = __importDefault(require("../Database"));
class Libro_LenguajeController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const libros_lenguajes = yield Database_1.default.query(`exec Ver_Libros_Lenguajes`);
            return res.json(libros_lenguajes.recordset);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Database_1.default.query(`exec Insertar_Libros_Lenguajes`);
            console.log(req);
            res.json({ 'Text': 'Libro creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`exec Borrar_Lenguaje @Id_Lenguaje = ${id}`);
            res.json({ 'Text': 'Libro borrado: ' + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`exec Actualizar_Lenguaje @Lenguaje = '${req.body.Lenguaje}', @Id_Lenguaje = ${id}`);
            res.json({ 'Text': 'Libro actualizado: ' + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const libro_lenguaje = yield Database_1.default.query(`exec Ver_Detalla_Libro_Lenguaje @Id_Libro_Lenguaje = ${id}`);
            if (libro_lenguaje.rowsAffected > 0) {
                console.log(libro_lenguaje.recordset[0]);
                return res.json(libro_lenguaje.recordset[0]);
            }
            else {
                res.status(404).json({ 'Text': 'El libro no existe: ' + id });
            }
        });
    }
}
exports.libro_LenguajeController = new Libro_LenguajeController();
exports.default = exports.libro_LenguajeController;
// https://www.youtube.com/watch?v=Z3EJM8Xcc2E
