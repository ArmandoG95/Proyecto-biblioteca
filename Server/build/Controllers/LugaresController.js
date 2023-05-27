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
exports.lugaresController = void 0;
const Database_1 = __importDefault(require("../Database"));
class LugaresControllers {
    //GET
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lugares = yield Database_1.default.query('EXEC SelectLugares');
            res.json(lugares.recordset);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Database_1.default.query(`EXEC createLugares '${req.body.Lugar}'`);
            console.log(req);
            res.json({ 'Text': 'Lugar creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`EXEC deleteLugares @IdLugar = '${id}'`);
            res.json({ Text: 'Borrando Lugar ' + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`EXEC updateLugares @Lugar = '${req.body.Lugar}', @IdLugar = ${id}`);
            res.json({ 'Text': 'Lugar actualizado: ' + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const lugar = yield Database_1.default.query(`EXEC detailLugares @IdLugar = ${id}`);
            if (lugar.rowsAffected > 0) {
                console.log(lugar.recordset[0]);
                return res.json(lugar.recordset[0]);
            }
            else {
                res.status(404).json({ Text: 'Lugar no existe 404 not found' + req.params.id });
            }
        });
    }
}
exports.lugaresController = new LugaresControllers();
exports.default = exports.lugaresController;
