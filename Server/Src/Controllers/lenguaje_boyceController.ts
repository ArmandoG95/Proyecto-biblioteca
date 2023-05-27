import { Request, Response } from "express";
import pool from '../Database';


class Lenguaje_BoyceController {
    public async index(req: Request, res: Response): Promise<any> {
        const lenguajes_temporal = await pool.query(`exec Ver_Temporal_Lenguaje`);
        return res.json(lenguajes_temporal.recordset);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query(`exec Insertar_Temporal_Lenguaje @Id_Lenguaje = ${req.body.Id_Lenguaje}`);
        console.log(req);
        res.json({ 'Text': 'Lenguaje en temporal creado' });
    }

    public async createTable(req: Request, res: Response): Promise<void> {
        await pool.query(`exec Creacion_Temporal_Lenguaje`);
        console.log(req);
        res.json({ 'Text': 'Lenguaje en temporal creado' });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`exec Borrar_Temporal_Lenguaje @Id_Temporal = ${id}`);
        res.json({ 'Text': 'Lenguaje en temporal borrado: ' + id });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`exec Actualizar_Lenguaje @Lenguaje = '${req.body.Lenguaje}', @Id_Lenguaje = ${id}`);
        res.json({ 'Text': 'Lenguaje en temporal actualizado: ' + id });
    }

    public async detail(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const lenguaje_temporal = await pool.query(`exec Ver_Temporal_Detalle_Lenguaje @Id_Temporal = ${id}`)
        if (lenguaje_temporal.rowsAffected > 0) {
            console.log(lenguaje_temporal.recordset[0]);
            return res.json(lenguaje_temporal.recordset[0]);
        }
        else {
            res.status(404).json({ 'Text': 'El lenguaje en temporal no existe: ' + id });
        }
    }
}
export const lenguaje_BoyceController = new Lenguaje_BoyceController();
export default lenguaje_BoyceController;