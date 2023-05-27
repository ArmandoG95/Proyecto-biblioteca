"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const libroController_1 = require("../Controllers/libroController");
class LibroRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', libroController_1.libroController.index);
        this.router.post('/', libroController_1.libroController.create);
        this.router.delete('/:id', libroController_1.libroController.delete);
        this.router.put('/:id', libroController_1.libroController.update);
        this.router.get('/:id', libroController_1.libroController.detail);
    }
}
const libroRoutes = new LibroRoutes();
exports.default = libroRoutes.router;
