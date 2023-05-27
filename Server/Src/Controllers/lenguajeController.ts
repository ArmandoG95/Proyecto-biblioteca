import { Request, Response } from "express";
import pool from '../Database';


class LenguajeController {
    public async index(req: Request, res: Response): Promise<any> {
        const lenguajes = await pool.query(`exec Ver_Lenguajes`);
        return res.json(lenguajes.recordset);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query(`exec Insertar_Lenguaje @Lenguaje = '${req.body.Lenguaje}'`);
        console.log(req);
        res.json({ 'Text': 'Lenguaje creado' });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`exec Borrar_Lenguaje @Id_Lenguaje = ${id}`);
        res.json({ 'Text': 'Lenguaje borrado: ' + id });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`exec Actualizar_Lenguaje @Lenguaje = '${req.body.Lenguaje}', @Id_Lenguaje = ${id}`);
        res.json({ 'Text': 'Lenguaje actualizado: ' + id });
    }

    public async detail(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const lenguaje = await pool.query(`exec Ver_Detalle_Lenguaje @Id_Lenguaje = ${id}`)
        if (lenguaje.rowsAffected > 0) {
            console.log(lenguaje.recordset[0]);
            return res.json(lenguaje.recordset[0]);
        }
        else {
            res.status(404).json({ 'Text': 'El lenguaje no existe: ' + id });
        }
    }
}
export const lenguajeController = new LenguajeController();
export default lenguajeController;