import { Router } from 'express';
import {tipos_Tapas_Controllers} from '../Controllers/Tipos_Tapas_Controller';

class Tipos_Tapas_Routes
{
    public router: Router = Router();

    constructor()
    {
        this.config();
    }

    config():void
    {
        //FUNCIONA
        this.router.get('/',tipos_Tapas_Controllers.index);
        //FUNCIONA
        this.router.post('/',tipos_Tapas_Controllers.create);
        //FUNCIONA
        this.router.delete('/:id',tipos_Tapas_Controllers.delete);
        //FUNCIONA
        this.router.put('/:id',tipos_Tapas_Controllers.update);
        //FUNCIONA
        this.router.get('/:id',tipos_Tapas_Controllers.detail);
    }
}
const tipos_Tapas_Routes = new Tipos_Tapas_Routes();
export default tipos_Tapas_Routes.router;