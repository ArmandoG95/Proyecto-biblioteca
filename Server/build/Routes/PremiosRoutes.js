"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PremiosController_1 = require("../Controllers/PremiosController");
class PremiosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //FUNCIONA
        this.router.get('/', PremiosController_1.premiosController.index);
        //FUNCIONA
        this.router.post('/', PremiosController_1.premiosController.create);
        //FUNCIONA
        this.router.delete('/:id', PremiosController_1.premiosController.delete);
        //FUNCIONA
        this.router.put('/:id', PremiosController_1.premiosController.update);
        //FUNCIONA
        this.router.get('/:id', PremiosController_1.premiosController.detail);
    }
}
const premiosRoutes = new PremiosRoutes();
exports.default = premiosRoutes.router;
