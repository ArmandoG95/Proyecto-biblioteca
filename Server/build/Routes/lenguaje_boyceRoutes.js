"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lenguaje_boyceController_1 = require("../Controllers/lenguaje_boyceController");
class Lenguaje_BoyceRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', lenguaje_boyceController_1.lenguaje_BoyceController.index);
        this.router.post('/', lenguaje_boyceController_1.lenguaje_BoyceController.create);
        this.router.delete('/:id', lenguaje_boyceController_1.lenguaje_BoyceController.delete);
        this.router.put('/:id', lenguaje_boyceController_1.lenguaje_BoyceController.update);
        this.router.get('/:id', lenguaje_boyceController_1.lenguaje_BoyceController.detail);
    }
}
const lenguaje_BoyceRoutes = new Lenguaje_BoyceRoutes();
exports.default = lenguaje_BoyceRoutes.router;
