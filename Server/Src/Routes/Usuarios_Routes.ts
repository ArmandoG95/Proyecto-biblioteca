import { Router } from 'express';
import {usuarios_Controllers} from '../Controllers/Usuarios_Controllers';

class Usuarios_Routes
{
    public router: Router = Router();

    constructor()
    {
        this.config();
    }

    config():void
    {
        //FUNCIONA
        this.router.get('/',usuarios_Controllers.index);
        //FUNCIONA
        this.router.post('/',usuarios_Controllers.insert);
        //FUNCIONA
        this.router.delete('/:id',usuarios_Controllers.delete);
        //FUNCIONA
        this.router.put('/:id',usuarios_Controllers.update);
        //FUNCIONA
        this.router.get('/:id',usuarios_Controllers.detail);
        //LOGIN
        this.router.post('/login',usuarios_Controllers.login);
    }

}
const usuarios_Routes = new Usuarios_Routes();
export default usuarios_Routes.router;