"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Clientes_Controllers_1 = require("../Controllers/Clientes_Controllers");
class Clientes_Routes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //FUNCIONA
        this.router.get('/', Clientes_Controllers_1.clientes_Controllers.index);
        //FUNCIONA
        this.router.post('/', Clientes_Controllers_1.clientes_Controllers.create);
        //FUNCIONA
        this.router.delete('/:id', Clientes_Controllers_1.clientes_Controllers.delete);
        //FUNCIONA
        this.router.put('/:id', Clientes_Controllers_1.clientes_Controllers.update);
        //FUNCIONA
        this.router.get('/:id', Clientes_Controllers_1.clientes_Controllers.detail);
    }
}
const clientes_Routes = new Clientes_Routes();
exports.default = clientes_Routes.router;
