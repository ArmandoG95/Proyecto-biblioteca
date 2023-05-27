"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const libro_lenguajeController_1 = require("../Controllers/libro_lenguajeController");
class Libro_LenguajeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', libro_lenguajeController_1.libro_LenguajeController.index);
        this.router.post('/', libro_lenguajeController_1.libro_LenguajeController.create);
        this.router.delete('/:id', libro_lenguajeController_1.libro_LenguajeController.delete);
        this.router.put('/:id', libro_lenguajeController_1.libro_LenguajeController.update);
        this.router.get('/:id', libro_lenguajeController_1.libro_LenguajeController.detail);
    }
}
const libro_LenguajeRoutes = new Libro_LenguajeRoutes();
exports.default = libro_LenguajeRoutes.router;
