import { Router } from 'express';
import autoresController from '../Controllers/AutoresController';

class AutoresRoutes
{
    public router: Router = Router();

    constructor()
    {
        this.config();
    }

    config():void
    {
        //FUNCIONA
        this.router.get('/',autoresController.index);
        //FUNCIONA
        this.router.post('/',autoresController.create);
        //FUNCIONA
        this.router.delete('/:id',autoresController.delete);
        //FUNCIONA
        this.router.put('/:id',autoresController.update);
        //FUNCIONA
        this.router.get('/:id',autoresController.detail);
    }
}
const autoresRoutes = new AutoresRoutes();
export default autoresRoutes.router;