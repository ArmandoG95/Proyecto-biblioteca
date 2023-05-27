"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Usuarios_Controllers_1 = require("../Controllers/Usuarios_Controllers");
class Usuarios_Routes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //FUNCIONA
        this.router.get('/', Usuarios_Controllers_1.usuarios_Controllers.index);
        //FUNCIONA
        this.router.post('/', Usuarios_Controllers_1.usuarios_Controllers.insert);
        //FUNCIONA
        this.router.delete('/:id', Usuarios_Controllers_1.usuarios_Controllers.delete);
        //FUNCIONA
        this.router.put('/:id', Usuarios_Controllers_1.usuarios_Controllers.update);
        //FUNCIONA
        this.router.get('/:id', Usuarios_Controllers_1.usuarios_Controllers.detail);
        //LOGIN
        this.router.post('/login', Usuarios_Controllers_1.usuarios_Controllers.login);
    }
}
const usuarios_Routes = new Usuarios_Routes();
exports.default = usuarios_Routes.router;
