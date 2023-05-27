import { Router } from 'express';
import { lenguajeController } from '../Controllers/lenguajeController';

class LenguajeRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', lenguajeController.index);
        this.router.post('/', lenguajeController.create);
        this.router.delete('/:id', lenguajeController.delete);
        this.router.put('/:id', lenguajeController.update);
        this.router.get('/:id', lenguajeController.detail);
    }
}

const lenguajeRoutes = new LenguajeRoutes();
export default lenguajeRoutes.router;