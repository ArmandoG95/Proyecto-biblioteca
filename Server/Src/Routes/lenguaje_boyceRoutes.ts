import { Router } from 'express';
import { lenguaje_BoyceController } from '../Controllers/lenguaje_boyceController';

class Lenguaje_BoyceRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', lenguaje_BoyceController.index);
        this.router.post('/', lenguaje_BoyceController.create);
        this.router.delete('/:id', lenguaje_BoyceController.delete);
        this.router.put('/:id', lenguaje_BoyceController.update);
        this.router.get('/:id', lenguaje_BoyceController.detail);
    }
}

const lenguaje_BoyceRoutes = new Lenguaje_BoyceRoutes();
export default lenguaje_BoyceRoutes.router;