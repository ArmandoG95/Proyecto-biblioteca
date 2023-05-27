"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AutoresController_1 = __importDefault(require("../controllers/AutoresController"));
class AutoresRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //FUNCIONA
        this.router.get('/', AutoresController_1.default.index);
        //FUNCIONA
        this.router.post('/', AutoresController_1.default.create);
        //FUNCIONA
        this.router.delete('/:id', AutoresController_1.default.delete);
        //FUNCIONA
        this.router.put('/:id', AutoresController_1.default.update);
        //FUNCIONA
        this.router.get('/:id', AutoresController_1.default.detail);
    }
}
const autoresRoutes = new AutoresRoutes();
exports.default = autoresRoutes.router;
