import { Router } from 'express';
import { lugaresController } from '../Controllers/LugaresController';

class LugaresRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        //FUNCIONA
        this.router.get('/', lugaresController.index);
        //FUNCIONA
        this.router.post('/', lugaresController.create);
        //FUNCIONA
        this.router.delete('/:id', lugaresController.delete);
        //FUNCIONA
        this.router.put('/:id', lugaresController.update);
        //FUNCIONA
        this.router.get('/:id', lugaresController.detail);
    }
}
const lugaresRoutes = new LugaresRoutes();
export default lugaresRoutes.router;