import { Router } from 'express';
import estilosLiterariosController from '../Controllers/EstilosLiterariosController';
class EstilosLiterariosRoutes
{
    public router: Router = Router();

    constructor()
    {
        this.config();
    }

    config():void
    {
        //FUNCIONA
        this.router.get('/',estilosLiterariosController.index);
        //FUNCIONA
        this.router.post('/',estilosLiterariosController.create);
        //FUNCIONA
        this.router.delete('/:id',estilosLiterariosController.delete);
        //FUNCIONA
        this.router.put('/:id',estilosLiterariosController.update);
        //FUNCIONA
        this.router.get('/:id',estilosLiterariosController.detail);
    }
}
const estilosLiterariosRoutes = new EstilosLiterariosRoutes();
export default estilosLiterariosRoutes.router;