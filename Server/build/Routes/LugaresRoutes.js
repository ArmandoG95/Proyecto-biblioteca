"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LugaresController_1 = require("../Controllers/LugaresController");
class LugaresRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //FUNCIONA
        this.router.get('/', LugaresController_1.lugaresController.index);
        //FUNCIONA
        this.router.post('/', LugaresController_1.lugaresController.create);
        //FUNCIONA
        this.router.delete('/:id', LugaresController_1.lugaresController.delete);
        //FUNCIONA
        this.router.put('/:id', LugaresController_1.lugaresController.update);
        //FUNCIONA
        this.router.get('/:id', LugaresController_1.lugaresController.detail);
    }
}
const lugaresRoutes = new LugaresRoutes();
exports.default = lugaresRoutes.router;
