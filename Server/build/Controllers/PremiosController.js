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
exports.premiosController = void 0;
const Database_1 = __importDefault(require("../Database"));
class PremiosController {
    //GET
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const premios = yield Database_1.default.query('EXEC SelectPremios');
            res.json(premios.recordset);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Database_1.default.query(`EXEC CreatePremios '${req.body.Premio}', '${req.body.Premio_Categoria}', '${req.body.Otorgado_Por}', '${req.body.Primera_Entrega}', '${req.body.Id_Lugar}'`);
            console.log(req);
            res.json({ 'Text': 'Premio creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`EXEC DeletePremios @IdPremio = '${id}'`);
            res.json({ Text: 'Borrando Premio ' + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`EXEC UpdatePremios @IdPremio = ${id}, @Premio = '${req.body.Premio}', @Premio_Categoria = '${req.body.Premio_Categoria}', @Otorgado_Por = '${req.body.Otorgado_Por}',
        @Primera_Entrega = '${req.body.Primera_Entrega}', @Id_Lugar = ${req.body.Id_Lugar}`);
            res.json({ 'Text': 'Premio actualizado: ' + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const premio = yield Database_1.default.query(`EXEC DetailPremios @IdPremio = ${id}`);
            if (premio.rowsAffected > 0) {
                console.log(premio.recordset[0]);
                return res.json(premio.recordset[0]);
            }
            else {
                res.status(404).json({ Text: 'Premio no existe 404 not found' + req.params.id });
            }
        });
    }
}
exports.premiosController = new PremiosController();
exports.default = exports.premiosController;
