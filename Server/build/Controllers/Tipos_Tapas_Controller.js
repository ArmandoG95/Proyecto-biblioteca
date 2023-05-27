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
exports.tipos_Tapas_Controllers = void 0;
const Database_1 = __importDefault(require("../Database"));
class Tipos_Tapas_Controllers {
    //GET
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipos_tapas = yield Database_1.default.query('EXEC SelectTipos_Tapas');
            res.json(tipos_tapas.recordset);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Database_1.default.query(`EXEC CreateTipos_Tapas @Tipo_Tapa = '${req.body.Tipo_Tapa}'`);
            console.log(req);
            res.json({ 'Text': 'tapa creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`EXEC DeleteTipos_Tapas @id_tipo_tapa = '${id}'`);
            res.json({ Text: 'Tapa borrada ' + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`EXEC UpdateTipo_tapa @Tipo_Tapa = '${req.body.Tipo_Tapa}', @id_tipo_tapa = ${id}`);
            res.json({ 'Text': 'Tapa actualizada: ' + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const tipoTapa = yield Database_1.default.query(`EXEC DetailTipos_tapas @id_tipo_tapa = ${id}`);
            if (tipoTapa.rowsAffected > 0) {
                console.log(tipoTapa.recordset[0]);
                return res.json(tipoTapa.recordset[0]);
            }
            else {
                res.status(404).json({ Text: 'Tapa no existe 404 not found' + req.params.id });
            }
        });
    }
}
exports.tipos_Tapas_Controllers = new Tipos_Tapas_Controllers();
exports.default = exports.tipos_Tapas_Controllers;
