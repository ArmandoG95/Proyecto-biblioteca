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
exports.usuarios_Controllers = void 0;
const Database_1 = __importDefault(require("../Database"));
class Usuarios_Controllers {
    //GET
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield Database_1.default.query('exec SelectUsuarios');
            res.json(usuarios.recordset);
        });
    }
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Database_1.default.query(`exec insertUsuario @Usuario= '${req.body.Usuario}', @password = '${req.body.password}', 
        @id_Rol= ${req.body.id_Rol}`);
            res.json({ Text: 'Usuario guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`exec DeleteUsuario @id_usuario = ${id}`);
            res.json({ Text: 'Usuarios borrado: ' + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Database_1.default.query(`exec updateUsuario @id_usuario = ${id},
        @usuario = '${req.body.Usuario}', 
        @password = '${req.body.password}',
        @id_Rol = ${req.body.id_Rol}`);
            res.json({ 'Text': 'Usuario actualizado: ' + id });
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield Database_1.default.query(`exec selectUsuario @id_usuario = ${id}`);
            if (usuario.rowsAffected > 0) {
                console.log(usuario.recordset[0]);
                return res.json(usuario.recordset[0]);
            }
            else {
                res.status(404).json({ Text: 'Cliente no existe 404 not found' + req.params.id });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = req.body.Usuario;
            const password = req.body.password;
            try {
                const result = yield Database_1.default.request()
                    .input('Usuario', usuario)
                    .input('password', password)
                    .query('SELECT id_usuario, Usuario FROM Usuarios WHERE Usuario = @usuario AND password = @password');
                if (result.recordset.length === 0) {
                    res.status(401).send({ message: 'Nombre de usuario o contraseña incorrectos.' });
                    return;
                }
                const user = result.recordset[0];
                res.send({
                    id: user.id_usuario,
                    username: user.Usuario
                });
            }
            catch (err) {
                console.error(err);
                res.status(500).send({ message: 'Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo más tarde.' });
            }
        });
    }
}
exports.usuarios_Controllers = new Usuarios_Controllers();
exports.default = exports.usuarios_Controllers;
