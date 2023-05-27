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
exports.clientes_Controllers = void 0;
const Database_1 = __importDefault(require("../Database"));
class Clientes_Controllers {
    //GET
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientes = yield Database_1.default.query('EXEC SelectClientes');
            res.json(clientes.recordset);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Database_1.default.query(`EXEC CreateCliente 
        @Nombre = '${req.body.Nombre}',
        @A_Paterno = '${req.body.Apellido_Paterno}',
        @A_Materno = '${req.body.Apellido_Materno}',
        @Colonia = '${req.body.Colonia}',
        @Calle = '${req.body.Calle}',
        @Numero = '${req.body.Numero}',
        @Correo_Electronico = '${req.body.Correo_Electronico}',
        @Celular = '${req.body.Celular}'`);
            console.log(req);
            res.json({ 'Text': 'Cliente creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`EXEC DeleteCliente @Id_Cliente = '${id}'`);
            res.json({ Text: 'Cliente borrado ' + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`EXEC UpdatCliente @Nombre = '${req.body.Nombre}',
        @A_Paterno = '${req.body.Apellido_Paterno}',
        @A_Materno = '${req.body.Apellido_Materno}',
        @Colonia = '${req.body.Colonia}',
        @Calle = '${req.body.Calle}',
        @Numero = '${req.body.Numero}',
        @Correo_Electronico = '${req.body.Correo_Electronico}',
        @Celular = '${req.body.Celular}',
        @Id_Cliente = ${id}`);
            res.json({ 'Text': 'Tapa Cliente actualizado: ' + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const cliente = yield Database_1.default.query(`EXEC DetailCliente @Id_Cliente = ${id}`);
            if (cliente.rowsAffected > 0) {
                console.log(cliente.recordset[0]);
                return res.json(cliente.recordset[0]);
            }
            else {
                res.status(404).json({ Text: 'Cliente no existe 404 not found' + req.params.id });
            }
        });
    }
}
exports.clientes_Controllers = new Clientes_Controllers();
exports.default = exports.clientes_Controllers;
