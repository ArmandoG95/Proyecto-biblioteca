import { Router } from 'express';
import { editorialController } from '../Controllers/editorialController';

class EditorialRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', editorialController.index);
        this.router.post('/', editorialController.create);
        this.router.delete('/:id', editorialController.delete);
        this.router.put('/:id', editorialController.update);
        this.router.get('/:id', editorialController.detail);
    }
}

const editorialRoutes = new EditorialRoutes();
export default editorialRoutes.router;