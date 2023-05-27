"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Tipos_Tapas_Controller_1 = require("../Controllers/Tipos_Tapas_Controller");
class Tipos_Tapas_Routes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //FUNCIONA
        this.router.get('/', Tipos_Tapas_Controller_1.tipos_Tapas_Controllers.index);
        //FUNCIONA
        this.router.post('/', Tipos_Tapas_Controller_1.tipos_Tapas_Controllers.create);
        //FUNCIONA
        this.router.delete('/:id', Tipos_Tapas_Controller_1.tipos_Tapas_Controllers.delete);
        //FUNCIONA
        this.router.put('/:id', Tipos_Tapas_Controller_1.tipos_Tapas_Controllers.update);
        //FUNCIONA
        this.router.get('/:id', Tipos_Tapas_Controller_1.tipos_Tapas_Controllers.detail);
    }
}
const tipos_Tapas_Routes = new Tipos_Tapas_Routes();
exports.default = tipos_Tapas_Routes.router;
