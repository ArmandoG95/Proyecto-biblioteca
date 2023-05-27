import { Request,response,Response } from 'express';
import  pool  from "../Database";

class EstilosLiterariosController
{
    //GET
    public async index(req:Request, res:Response)
    {
        const estilos = await pool.query('EXEC SelectEstilos');
        res.json(estilos.recordset);
    }


    public async create(req: Request, res: Response): Promise<void>
    {
        await pool.query(`EXEC CreateEstilos '${req.body.Estilo_Literario}'`);
        console.log(req);
        res.json({'Text':'Estilo Literario creado'});
    }

    public async delete(req:Request, res:Response):Promise<void>
    {
        const {id} = req.params;
        await pool.query(`EXEC DeleteEstilos @IdEstiloLiterario = '${id}'`);
        
        res.json({Text:'Borrando Estilo Literario ' + id });
    }

    public async update(req: Request, res: Response): Promise<void>
    {
        const {id} = req.params;
        await pool.query(`EXEC UpdateEstilos @Estilo_Literario = '${req.body.Estilo_Literario}', @IdEstiloLiterario = ${id}`);
        res.json({'Text':'Estilo Literario actualizado: ' + id});
    }

    public async detail(req:Request,res:Response): Promise<any>
    {
        const {id} = req.params;
        const estilo = await pool.query(`EXEC DetailEstilo @IdEstiloLiterario = ${id}`);
        if(estilo.rowsAffected > 0)
        {
            console.log(estilo.recordset[0]);
            return res.json(estilo.recordset[0])
        }
        else
        {
            res.status(404).json({Text:'Estilo Literario no existe 404 not found' + req.params.id })
        }
    }
}

export const estilosLiterariosController = new EstilosLiterariosController();
export default estilosLiterariosController;