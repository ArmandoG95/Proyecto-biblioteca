import { Router } from 'express';
import { libro_LenguajeController } from '../Controllers/libro_lenguajeController';

class Libro_LenguajeRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', libro_LenguajeController.index);
        this.router.post('/', libro_LenguajeController.create);
        this.router.delete('/:id', libro_LenguajeController.delete);
        this.router.put('/:id', libro_LenguajeController.update);
        this.router.get('/:id', libro_LenguajeController.detail);
    }
}

const libro_LenguajeRoutes = new Libro_LenguajeRoutes();
export default libro_LenguajeRoutes.router;