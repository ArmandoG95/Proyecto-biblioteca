"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PremiosAutoresController_1 = __importDefault(require("../Controllers/PremiosAutoresController"));
class PremiosAutoresRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //FUNCIONA
        this.router.get('/', PremiosAutoresController_1.default.index);
        //FUNCIONA
        this.router.post('/', PremiosAutoresController_1.default.create);
        //FUNCIONA
        this.router.delete('/:id', PremiosAutoresController_1.default.delete);
        //FUNCIONA
        this.router.get('/:id', PremiosAutoresController_1.default.detail);
    }
}
const premiosAutoresRoutes = new PremiosAutoresRoutes();
exports.default = premiosAutoresRoutes.router;
