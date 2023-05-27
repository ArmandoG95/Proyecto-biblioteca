import { Router } from 'express';
import { libroController } from '../Controllers/libroController';

class LibroRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', libroController.index);
        this.router.post('/', libroController.create);
        this.router.delete('/:id', libroController.delete);
        this.router.put('/:id', libroController.update);
        this.router.get('/:id', libroController.detail);
    }
}

const libroRoutes = new LibroRoutes();
export default libroRoutes.router;