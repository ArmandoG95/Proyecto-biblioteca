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
exports.premiosAutoresController = void 0;
const Database_1 = __importDefault(require("../Database"));
class PremiosAutoresController {
    //GET
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const autores = yield Database_1.default.query('EXEC SelectPremiosAutores');
            res.json(autores.recordset);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Database_1.default.query(`EXEC CreatePremiosAutores ${req.body.Id_Premio}, ${req.body.Id_Autor}`);
            console.log(req);
            res.json({ 'Text': 'Premio asignado al autor' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`========= ESTE ES EL ID${req.params.Id_Premio_Autor}--===================`);
            const { id } = req.params;
            yield Database_1.default.query(`DELETE FROM Premios_Autores WHERE Id_Premio_Autor = ${id}`);
            res.json({ Text: 'Borrando el premio al autor ' + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const autor = yield Database_1.default.query(`EXEC DetailPremioAutor ${id}`);
            if (autor.rowsAffected > 0) {
                console.log(autor.recordset[0]);
                return res.json(autor.recordset[0]);
            }
            else {
                res.status(404).json({ Text: 'Autor no existe 404 not found' + req.params.id });
            }
        });
    }
}
exports.premiosAutoresController = new PremiosAutoresController();
exports.default = exports.premiosAutoresController;
