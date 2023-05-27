import { Request,response,Response } from 'express';
import  pool  from "../Database";

class PremiosAutoresController
{
    //GET
    public async index(req:Request, res:Response)
    {
        const autores = await pool.query('EXEC SelectPremiosAutores');
        res.json(autores.recordset);
    }

    public async create(req: Request, res: Response): Promise<void>
    {
        await pool.query(`EXEC CreatePremiosAutores ${req.body.Id_Premio}, ${req.body.Id_Autor}`);
        console.log(req);
        res.json({'Text':'Premio asignado al autor'});
    }

    public async delete(req:Request, res:Response):Promise<void>
    {
        console.log(`========= ESTE ES EL ID${req.params.Id_Premio_Autor}--===================`)
        const {id} = req.params;
        await pool.query(`DELETE FROM Premios_Autores WHERE Id_Premio_Autor = ${id}`);
        

        res.json({Text:'Borrando el premio al autor ' + id });
    }


    public async detail(req:Request,res:Response): Promise<any>
    {
        const {id} = req.params;
        const autor = await pool.query(`EXEC DetailPremioAutor ${id}`);
        if(autor.rowsAffected > 0)
        {
            console.log(autor.recordset[0]);
            return res.json(autor.recordset[0])
        }
        else
        {
            res.status(404).json({Text:'Autor no existe 404 not found' + req.params.id })
        }
    }
}

export const premiosAutoresController = new PremiosAutoresController();
export default premiosAutoresController;