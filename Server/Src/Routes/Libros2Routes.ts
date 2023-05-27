import { Router } from 'express';
import libros2Controller from '../Controllers/Libros2Controller';

class Libros2Routes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', libros2Controller.index);
        this.router.post('/', libros2Controller.create);
        this.router.delete('/:id', libros2Controller.delete);
        this.router.put('/:id', libros2Controller.update);
        this.router.get('/:id', libros2Controller.detail);
    }
}

const libros2Routes = new Libros2Routes();
export default libros2Routes.router;