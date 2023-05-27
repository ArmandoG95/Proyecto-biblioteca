import { Router } from 'express';
import {clientes_Controllers} from '../Controllers/Clientes_Controllers';

class Clientes_Routes
{
    public router: Router = Router();

    constructor()
    {
        this.config();
    }

    config():void
    {
        //FUNCIONA
        this.router.get('/',clientes_Controllers.index);
        //FUNCIONA
        this.router.post('/',clientes_Controllers.create);
        //FUNCIONA
        this.router.delete('/:id',clientes_Controllers.delete);
        //FUNCIONA
        this.router.put('/:id',clientes_Controllers.update);
        //FUNCIONA
        this.router.get('/:id',clientes_Controllers.detail);
    }
}
const clientes_Routes = new Clientes_Routes();
export default clientes_Routes.router;