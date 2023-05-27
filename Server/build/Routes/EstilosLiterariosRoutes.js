"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EstilosLiterariosController_1 = __importDefault(require("../Controllers/EstilosLiterariosController"));
class EstilosLiterariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //FUNCIONA
        this.router.get('/', EstilosLiterariosController_1.default.index);
        //FUNCIONA
        this.router.post('/', EstilosLiterariosController_1.default.create);
        //FUNCIONA
        this.router.delete('/:id', EstilosLiterariosController_1.default.delete);
        //FUNCIONA
        this.router.put('/:id', EstilosLiterariosController_1.default.update);
        //FUNCIONA
        this.router.get('/:id', EstilosLiterariosController_1.default.detail);
    }
}
const estilosLiterariosRoutes = new EstilosLiterariosRoutes();
exports.default = estilosLiterariosRoutes.router;
