import { Router } from 'express';
import { premiosController } from '../Controllers/PremiosController';

class PremiosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        //FUNCIONA
        this.router.get('/', premiosController.index);
        //FUNCIONA
        this.router.post('/', premiosController.create);
        //FUNCIONA
        this.router.delete('/:id', premiosController.delete);
        //FUNCIONA
        this.router.put('/:id', premiosController.update);
        //FUNCIONA
        this.router.get('/:id', premiosController.detail);
    }
}
const premiosRoutes = new PremiosRoutes();
export default premiosRoutes.router;