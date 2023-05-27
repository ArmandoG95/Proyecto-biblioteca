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
exports.lenguajeController = void 0;
const Database_1 = __importDefault(require("../Database"));
class LenguajeController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lenguajes = yield Database_1.default.query(`exec Ver_Lenguajes`);
            return res.json(lenguajes.recordset);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Database_1.default.query(`exec Insertar_Lenguaje @Lenguaje = '${req.body.Lenguaje}'`);
            console.log(req);
            res.json({ 'Text': 'Lenguaje creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`exec Borrar_Lenguaje @Id_Lenguaje = ${id}`);
            res.json({ 'Text': 'Lenguaje borrado: ' + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`exec Actualizar_Lenguaje @Lenguaje = '${req.body.Lenguaje}', @Id_Lenguaje = ${id}`);
            res.json({ 'Text': 'Lenguaje actualizado: ' + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const lenguaje = yield Database_1.default.query(`exec Ver_Detalle_Lenguaje @Id_Lenguaje = ${id}`);
            if (lenguaje.rowsAffected > 0) {
                console.log(lenguaje.recordset[0]);
                return res.json(lenguaje.recordset[0]);
            }
            else {
                res.status(404).json({ 'Text': 'El lenguaje no existe: ' + id });
            }
        });
    }
}
exports.lenguajeController = new LenguajeController();
exports.default = exports.lenguajeController;
