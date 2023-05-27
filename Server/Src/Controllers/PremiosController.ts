import { Request, Response } from 'express';
import pool from "../Database";

class PremiosController {
    //GET
    public async index(req: Request, res: Response) {
        const premios = await pool.query('EXEC SelectPremios');
        res.json(premios.recordset);
    }


    public async create(req: Request, res: Response): Promise<void> {
        await pool.query(`EXEC CreatePremios '${req.body.Premio}', '${req.body.Premio_Categoria}', '${req.body.Otorgado_Por}', '${req.body.Primera_Entrega}', '${req.body.Id_Lugar}'`);
        console.log(req);
        res.json({ 'Text': 'Premio creado' });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`EXEC DeletePremios @IdPremio = '${id}'`);

        res.json({ Text: 'Borrando Premio ' + id });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`EXEC UpdatePremios @IdPremio = ${id}, @Premio = '${req.body.Premio}', @Premio_Categoria = '${req.body.Premio_Categoria}', @Otorgado_Por = '${req.body.Otorgado_Por}',
        @Primera_Entrega = '${req.body.Primera_Entrega}', @Id_Lugar = ${req.body.Id_Lugar}`);
        res.json({ 'Text': 'Premio actualizado: ' + id });
    }

    public async detail(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const premio = await pool.query(`EXEC DetailPremios @IdPremio = ${id}`);
        if (premio.rowsAffected > 0) {
            console.log(premio.recordset[0]);
            return res.json(premio.recordset[0])
        }
        else {
            res.status(404).json({ Text: 'Premio no existe 404 not found' + req.params.id })
        }
    }
}

export const premiosController = new PremiosController();
export default premiosController;