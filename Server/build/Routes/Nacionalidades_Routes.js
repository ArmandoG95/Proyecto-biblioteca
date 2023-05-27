"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Nacionalidades_Controllers_1 = require("../Controllers/Nacionalidades_Controllers");
class Nacionalidades_Routes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //FUNCIONA
        this.router.get('/', Nacionalidades_Controllers_1.nacionalidades_Controllers.index);
        //FUNCIONA
        this.router.post('/', Nacionalidades_Controllers_1.nacionalidades_Controllers.create);
        //FUNCIONA
        this.router.delete('/:id', Nacionalidades_Controllers_1.nacionalidades_Controllers.delete);
        //FUNCIONA
        this.router.put('/:id', Nacionalidades_Controllers_1.nacionalidades_Controllers.update);
        //FUNCIONA
        this.router.get('/:id', Nacionalidades_Controllers_1.nacionalidades_Controllers.detail);
    }
}
const nacionalidades_Routes = new Nacionalidades_Routes();
exports.default = nacionalidades_Routes.router;
