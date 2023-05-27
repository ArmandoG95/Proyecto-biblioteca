import { Request, Response } from "express";
import pool from '../Database';


class Libro_LenguajeController {
    public async index(req: Request, res: Response): Promise<any> {
        const libros_lenguajes = await pool.query(`exec Ver_Libros_Lenguajes`);
        return res.json(libros_lenguajes.recordset);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query(`exec Insertar_Libros_Lenguajes`);
        console.log(req);
        res.json({ 'Text': 'Libro creado' });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`exec Borrar_Lenguaje @Id_Lenguaje = ${id}`);
        res.json({ 'Text': 'Libro borrado: ' + id });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`exec Actualizar_Lenguaje @Lenguaje = '${req.body.Lenguaje}', @Id_Lenguaje = ${id}`);
        res.json({ 'Text': 'Libro actualizado: ' + id });
    }

    public async detail(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const libro_lenguaje = await pool.query(`exec Ver_Detalla_Libro_Lenguaje @Id_Libro_Lenguaje = ${id}`)
        if (libro_lenguaje.rowsAffected > 0) {
            console.log(libro_lenguaje.recordset[0]);
            return res.json(libro_lenguaje.recordset[0]);
        }
        else {
            res.status(404).json({ 'Text': 'El libro no existe: ' + id });
        }
    }
}
export const libro_LenguajeController = new Libro_LenguajeController();
export default libro_LenguajeController;


// https://www.youtube.com/watch?v=Z3EJM8Xcc2E