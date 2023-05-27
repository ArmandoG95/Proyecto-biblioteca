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
exports.generos_Literarios_Controllers = void 0;
const Database_1 = __importDefault(require("../Database"));
class Generos_Literarios_Controllers {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipos_tapas = yield Database_1.default.query('EXEC SelectGeneros_Literarios');
            res.json(tipos_tapas.recordset);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Database_1.default.query(`EXEC CreateGenero_Literario @Genero_Literario = '${req.body.Genero_Literario}', @Id_Estilo_Literario = ${req.body.Id_Estilo_Literario}`);
            console.log(req);
            res.json({ 'Text': 'Genero creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`EXEC DeleteGenero_Literario @Id_Genero_Literario = '${id}'`);
            res.json({ Text: 'Genero borrado ' + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`EXEC UpdateGenero_Literario @Genero_Literario = '${req.body.Genero_Literario}', @Id_Estilo_Literario = ${req.body.Id_Estilo_Literario} ,@Id_Genero_Literario = ${id}`);
            res.json({ 'Text': 'Genero actualizado: ' + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const genero_literario = yield Database_1.default.query(`EXEC DetailGenero_Literario @Id_Genero_Literario = ${id}`);
            if (genero_literario.rowsAffected > 0) {
                console.log(genero_literario.recordset[0]);
                return res.json(genero_literario.recordset[0]);
            }
            else {
                res.status(404).json({ Text: 'Genero no existe 404 not found' + req.params.id });
            }
        });
    }
    getEstilos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipos_tapas = yield Database_1.default.query('SELECT * FROM Estilos_Literarios');
            res.json(tipos_tapas.recordset);
        });
    }
}
exports.generos_Literarios_Controllers = new Generos_Literarios_Controllers();
exports.default = exports.generos_Literarios_Controllers;
