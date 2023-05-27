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
exports.lenguaje_BoyceController = void 0;
const Database_1 = __importDefault(require("../Database"));
class Lenguaje_BoyceController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lenguajes_temporal = yield Database_1.default.query(`exec Ver_Temporal_Lenguaje`);
            return res.json(lenguajes_temporal.recordset);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Database_1.default.query(`exec Insertar_Temporal_Lenguaje @Id_Lenguaje = '${req.body.Id_Lenguaje}'`);
            console.log(req);
            res.json({ 'Text': 'Libro creado' });
        });
    }
    createTable(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Database_1.default.query(`exec Creacion_Temporal_Lenguaje`);
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
            const lenguaje_temporal = yield Database_1.default.query(`select * from Libros_Lenguajes where ISBN = ${id}`);
            if (lenguaje_temporal.rowsAffected > 0) {
                console.log(lenguaje_temporal.recordset[0]);
                return res.json(lenguaje_temporal.recordset[0]);
            }
            else {
                res.status(404).json({ 'Text': 'El libro no existe: ' + id });
            }
        });
    }
}
exports.lenguaje_BoyceController = new Lenguaje_BoyceController();
exports.default = exports.lenguaje_BoyceController;
