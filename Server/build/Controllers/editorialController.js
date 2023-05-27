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
exports.editorialController = void 0;
const Database_1 = __importDefault(require("../Database"));
class EditorialController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lenguajes = yield Database_1.default.query(`exec Ver_Editoriales`);
            return res.json(lenguajes.recordset);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Database_1.default.query(`exec Insertar_Editorial @Editorial = '${req.body.Editorial}', @Sede_Central = '${req.body.Sede_Central}', @Fundador = '${req.body.Fundador}'`);
            console.log(req);
            res.json({ 'Text': 'Editorial creada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`exec Borrar_Editorial @Id_Editorial = ${id}`);
            res.json({ 'Text': 'Editorial borrada: ' + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`exec Actualizar_Editorial @Editorial = '${req.body.Editorial}', @Sede_Central = '${req.body.Sede_Central}', @Fundador = '${req.body.Fundador}', @Id_Editorial = ${id}`);
            res.json({ 'Text': 'Editorial actualizada: ' + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const editorial = yield Database_1.default.query(`exec Ver_Detalle_Editorial @Id_Editorial = ${id}`);
            if (editorial.rowsAffected > 0) {
                console.log(editorial.recordset[0]);
                return res.json(editorial.recordset[0]);
            }
            else {
                res.status(404).json({ 'Text': 'La editorial no existe: ' + id });
            }
        });
    }
}
exports.editorialController = new EditorialController();
exports.default = exports.editorialController;
