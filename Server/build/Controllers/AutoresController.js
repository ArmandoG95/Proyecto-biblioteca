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
exports.autoresController = void 0;
const Database_1 = __importDefault(require("../Database"));
class AutoresController {
    //GET
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const autores = yield Database_1.default.query('EXEC SelectAutores');
            res.json(autores.recordset);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Database_1.default.query(`EXEC CreateAutores @Nombre = '${req.body.Nombre}' , @Apellido_Paterno = '${req.body.Apellidp_Paterno}', @Apellido_Materno = '${req.body.Apellido_Materno}', @Pseudonimo = '${req.body.Pseudonimo}' , @Id_Nacionalidad = ${req.body.Id_Nacionalidad}`);
            console.log(req);
            res.json({ 'Text': 'Autor creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`EXEC DeleteAutores @Id_Autor = '${id}'`);
            res.json({ Text: 'Borrando Autor ' + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`EXEC UpdateAutores @Nombre = '${req.body.Nombre}', @Apellido_Paterno = '${req.body.Apellidp_Paterno}', @Apellido_Materno = '${req.body.Apellido_Materno}', @Pseudonimo = '${req.body.Pseudonimo}',@Id_Nacionalidad = ${req.body.Id_Nacionalidad}, @Id_Autor = ${id}`);
            res.json({ 'Text': 'Autor actualizado: ' + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const autor = yield Database_1.default.query(`EXEC DetailAutor @Id_Autor = ${id}`);
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
exports.autoresController = new AutoresController();
exports.default = exports.autoresController;
