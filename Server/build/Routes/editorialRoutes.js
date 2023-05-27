"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const editorialController_1 = require("../Controllers/editorialController");
class EditorialRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', editorialController_1.editorialController.index);
        this.router.post('/', editorialController_1.editorialController.create);
        this.router.delete('/:id', editorialController_1.editorialController.delete);
        this.router.put('/:id', editorialController_1.editorialController.update);
        this.router.get('/:id', editorialController_1.editorialController.detail);
    }
}
const editorialRoutes = new EditorialRoutes();
exports.default = editorialRoutes.router;
