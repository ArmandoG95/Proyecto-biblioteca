"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Libros2Controller_1 = __importDefault(require("../Controllers/Libros2Controller"));
class Libros2Routes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', Libros2Controller_1.default.index);
        this.router.post('/', Libros2Controller_1.default.create);
        this.router.delete('/:id', Libros2Controller_1.default.delete);
        this.router.put('/:id', Libros2Controller_1.default.update);
        this.router.get('/:id', Libros2Controller_1.default.detail);
    }
}
const libros2Routes = new Libros2Routes();
exports.default = libros2Routes.router;
