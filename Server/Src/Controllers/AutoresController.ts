import { Request,response,Response } from 'express';
import  pool  from "../Database";

class AutoresController
{
    //GET
    public async index(req:Request, res:Response)
    {
        const autores = await pool.query('EXEC SelectAutores');
        res.json(autores.recordset);
    }


    public async create(req: Request, res: Response): Promise<void>
    {
        await pool.query(`EXEC CreateAutores @Nombre = '${req.body.Nombre}' , @Apellido_Paterno = '${req.body.Apellidp_Paterno}', @Apellido_Materno = '${req.body.Apellido_Materno}', @Pseudonimo = '${req.body.Pseudonimo}' , @Id_Nacionalidad = ${req.body.Id_Nacionalidad}`);
        console.log(req);
        res.json({'Text':'Autor creado'});
    }

    public async delete(req:Request, res:Response):Promise<void>
    {
        const {id} = req.params;
        await pool.query(`EXEC DeleteAutores @Id_Autor = '${id}'`);
        
        res.json({Text:'Borrando Autor ' + id });
    }

    public async update(req: Request, res: Response): Promise<void>
    {
        const {id} = req.params;
        await pool.query(`EXEC UpdateAutores @Nombre = '${req.body.Nombre}', @Apellido_Paterno = '${req.body.Apellidp_Paterno}', @Apellido_Materno = '${req.body.Apellido_Materno}', @Pseudonimo = '${req.body.Pseudonimo}',@Id_Nacionalidad = ${req.body.Id_Nacionalidad}, @Id_Autor = ${id}`);
        res.json({'Text':'Autor actualizado: ' + id});
    }

    public async detail(req:Request,res:Response): Promise<any>
    {
        const {id} = req.params;
        const autor = await pool.query(`EXEC DetailAutor @Id_Autor = ${id}`);
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

export const autoresController = new AutoresController();
export default autoresController;