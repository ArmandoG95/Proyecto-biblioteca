"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lenguajeController_1 = require("../Controllers/lenguajeController");
class LenguajeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', lenguajeController_1.lenguajeController.index);
        this.router.post('/', lenguajeController_1.lenguajeController.create);
        this.router.delete('/:id', lenguajeController_1.lenguajeController.delete);
        this.router.put('/:id', lenguajeController_1.lenguajeController.update);
        this.router.get('/:id', lenguajeController_1.lenguajeController.detail);
    }
}
const lenguajeRoutes = new LenguajeRoutes();
exports.default = lenguajeRoutes.router;
