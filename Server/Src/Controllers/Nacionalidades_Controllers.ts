import { Request, Response } from 'express';
import pool from "../Database";

class Nacionalidades_Controllers {
    //GET
    public async index(req: Request, res: Response) {
        const naciones = await pool.query('EXEC SelectNaciones');
        res.json(naciones.recordset);
    }


    public async create(req: Request, res: Response): Promise<void> {
        await pool.query(`EXEC CreateNaciones @Nacionalidad = '${req.body.Nacionalidad}'`);
        console.log(req);
        res.json({ 'Text': 'Nacion agregada' });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`EXEC DeleteNaciones @Id_Nacionalidad = '${id}'`);

        res.json({ Text: 'Nacion borrada ' + id });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`EXEC UpdateNacion @Nacionalidad  = '${req.body.Nacionalidad}', @Id_Nacionalidad = ${id}`);
        res.json({ 'Text': 'Nacion actualizada: ' + id });
    }

    public async detail(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const nacion = await pool.query(`EXEC DetailNacion @Id_Nacionalidad = ${id}`);
        if (nacion.rowsAffected > 0) {
            console.log(nacion.recordset[0]);
            return res.json(nacion.recordset[0])
        }
        else {
            res.status(404).json({ Text: 'Nacion no existe 404 not found' + req.params.id })
        }
    }
}

export const nacionalidades_Controllers = new Nacionalidades_Controllers();
export default nacionalidades_Controllers;