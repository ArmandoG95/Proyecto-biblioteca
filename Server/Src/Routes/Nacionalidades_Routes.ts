import { Router } from 'express';
import {nacionalidades_Controllers} from '../Controllers/Nacionalidades_Controllers';

class Nacionalidades_Routes
{
    public router: Router = Router();

    constructor()
    {
        this.config();
    }

    config():void
    {
        //FUNCIONA
        this.router.get('/',nacionalidades_Controllers.index);
        //FUNCIONA
        this.router.post('/',nacionalidades_Controllers.create);
        //FUNCIONA
        this.router.delete('/:id',nacionalidades_Controllers.delete);
        //FUNCIONA
        this.router.put('/:id',nacionalidades_Controllers.update);
        //FUNCIONA
        this.router.get('/:id',nacionalidades_Controllers.detail);
    }
}
const nacionalidades_Routes = new Nacionalidades_Routes();
export default nacionalidades_Routes.router;