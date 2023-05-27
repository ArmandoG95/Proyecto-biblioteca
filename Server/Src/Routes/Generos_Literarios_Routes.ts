import { Router } from 'express';
import {generos_Literarios_Controllers} from '../Controllers/Generos_Literarios_Controllers';

class Generos_Literarios_Routes
{
    public router: Router = Router();

    constructor()
    {
        this.config();
    }

    config():void
    {
        //FUNCIONA
        this.router.get('/',generos_Literarios_Controllers.index);
        //FUNCIONA
        this.router.post('/',generos_Literarios_Controllers.create);
        //FUNCIONA
        this.router.delete('/:id',generos_Literarios_Controllers.delete);
        //FUNCIONA
        this.router.put('/:id',generos_Literarios_Controllers.update);
        //FUNCIONA
        this.router.get('/:id',generos_Literarios_Controllers.detail);
    }
}
const generos_Literarios_Routes = new Generos_Literarios_Routes();
export default generos_Literarios_Routes.router;