import { Request, Response } from 'express';
import pool from "../Database";

class Tipos_Tapas_Controllers {
    //GET
    public async index(req: Request, res: Response) {
        const tipos_tapas = await pool.query('EXEC SelectTipos_Tapas');
        res.json(tipos_tapas.recordset);
    }


    public async create(req: Request, res: Response): Promise<void> {
        await pool.query(`EXEC CreateTipos_Tapas @Tipo_Tapa = '${req.body.Tipo_Tapa}'`);
        console.log(req);
        res.json({ 'Text': 'tapa creado' });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`EXEC DeleteTipos_Tapas @id_tipo_tapa = '${id}'`);

        res.json({ Text: 'Tapa borrada ' + id });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`EXEC UpdateTipo_tapa @Tipo_Tapa = '${req.body.Tipo_Tapa}', @id_tipo_tapa = ${id}`);
        res.json({ 'Text': 'Tapa actualizada: ' + id });
    }

    public async detail(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const tipoTapa = await pool.query(`EXEC DetailTipos_tapas @id_tipo_tapa = ${id}`);
        if (tipoTapa.rowsAffected > 0) {
            console.log(tipoTapa.recordset[0]);
            return res.json(tipoTapa.recordset[0])
        }
        else {
            res.status(404).json({ Text: 'Tapa no existe 404 not found' + req.params.id })
        }
    }
}

export const tipos_Tapas_Controllers = new Tipos_Tapas_Controllers();
export default tipos_Tapas_Controllers;