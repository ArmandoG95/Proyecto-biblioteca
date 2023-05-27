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
exports.nacionalidades_Controllers = void 0;
const Database_1 = __importDefault(require("../Database"));
class Nacionalidades_Controllers {
    //GET
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const naciones = yield Database_1.default.query('EXEC SelectNaciones');
            res.json(naciones.recordset);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Database_1.default.query(`EXEC CreateNaciones @Nacionalidad = '${req.body.Nacionalidad}'`);
            console.log(req);
            res.json({ 'Text': 'Nacion agregada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`EXEC DeleteNaciones @Id_Nacionalidad = '${id}'`);
            res.json({ Text: 'Nacion borrada ' + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`EXEC UpdateNacion @Nacionalidad  = '${req.body.Nacionalidad}', @Id_Nacionalidad = ${id}`);
            res.json({ 'Text': 'Nacion actualizada: ' + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const nacion = yield Database_1.default.query(`EXEC DetailNacion @Id_Nacionalidad = ${id}`);
            if (nacion.rowsAffected > 0) {
                console.log(nacion.recordset[0]);
                return res.json(nacion.recordset[0]);
            }
            else {
                res.status(404).json({ Text: 'Nacion no existe 404 not found' + req.params.id });
            }
        });
    }
}
exports.nacionalidades_Controllers = new Nacionalidades_Controllers();
exports.default = exports.nacionalidades_Controllers;
