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
exports.estilosLiterariosController = void 0;
const Database_1 = __importDefault(require("../Database"));
class EstilosLiterariosController {
    //GET
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const estilos = yield Database_1.default.query('EXEC SelectEstilos');
            res.json(estilos.recordset);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Database_1.default.query(`EXEC CreateEstilos '${req.body.Estilo_Literario}'`);
            console.log(req);
            res.json({ 'Text': 'Estilo Literario creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`EXEC DeleteEstilos @IdEstiloLiterario = '${id}'`);
            res.json({ Text: 'Borrando Estilo Literario ' + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`EXEC UpdateEstilos @Estilo_Literario = '${req.body.Estilo_Literario}', @IdEstiloLiterario = ${id}`);
            res.json({ 'Text': 'Estilo Literario actualizado: ' + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const estilo = yield Database_1.default.query(`EXEC DetailEstilo @IdEstiloLiterario = ${id}`);
            if (estilo.rowsAffected > 0) {
                console.log(estilo.recordset[0]);
                return res.json(estilo.recordset[0]);
            }
            else {
                res.status(404).json({ Text: 'Estilo Literario no existe 404 not found' + req.params.id });
            }
        });
    }
}
exports.estilosLiterariosController = new EstilosLiterariosController();
exports.default = exports.estilosLiterariosController;
