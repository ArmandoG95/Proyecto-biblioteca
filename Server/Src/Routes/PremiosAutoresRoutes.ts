import { Router } from 'express';
import premiosAutoresController from '../Controllers/PremiosAutoresController';
class PremiosAutoresRoutes
{
    public router: Router = Router();

    constructor()
    {
        this.config();
    }

    config():void
    {
        //FUNCIONA
        this.router.get('/',premiosAutoresController.index);
        //FUNCIONA
        this.router.post('/',premiosAutoresController.create);
        //FUNCIONA
        this.router.delete('/:id',premiosAutoresController.delete);
        //FUNCIONA
        this.router.get('/:id',premiosAutoresController.detail);
    }
}
const premiosAutoresRoutes = new PremiosAutoresRoutes();
export default premiosAutoresRoutes.router;