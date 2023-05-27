"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Generos_Literarios_Controllers_1 = require("../Controllers/Generos_Literarios_Controllers");
class Generos_Literarios_Routes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //FUNCIONA
        this.router.get('/', Generos_Literarios_Controllers_1.generos_Literarios_Controllers.index);
        //FUNCIONA
        this.router.post('/', Generos_Literarios_Controllers_1.generos_Literarios_Controllers.create);
        //FUNCIONA
        this.router.delete('/:id', Generos_Literarios_Controllers_1.generos_Literarios_Controllers.delete);
        //FUNCIONA
        this.router.put('/:id', Generos_Literarios_Controllers_1.generos_Literarios_Controllers.update);
        //FUNCIONA
        this.router.get('/:id', Generos_Literarios_Controllers_1.generos_Literarios_Controllers.detail);
    }
}
const generos_Literarios_Routes = new Generos_Literarios_Routes();
exports.default = generos_Literarios_Routes.router;
