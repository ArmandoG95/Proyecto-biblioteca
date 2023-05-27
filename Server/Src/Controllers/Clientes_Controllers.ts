import { Request, Response } from 'express';
import pool from "../Database";

class Clientes_Controllers {
    //GET
    public async index(req: Request, res: Response) {
        const clientes = await pool.query('EXEC SelectClientes');
        res.json(clientes.recordset);
    }


    public async create(req: Request, res: Response): Promise<void> {
        await pool.query(`EXEC CreateCliente 
        @Nombre = '${req.body.Nombre}',
        @A_Paterno = '${req.body.Apellido_Paterno}',
        @A_Materno = '${req.body.Apellido_Materno}',
        @Colonia = '${req.body.Colonia}',
        @Calle = '${req.body.Calle}',
        @Numero = '${req.body.Numero}',
        @Correo_Electronico = '${req.body.Correo_Electronico}',
        @Celular = '${req.body.Celular}'`);
        console.log(req);
        res.json({ 'Text': 'Cliente creado' });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`EXEC DeleteCliente @Id_Cliente = '${id}'`);

        res.json({ Text: 'Cliente borrado ' + id });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`EXEC UpdatCliente @Nombre = '${req.body.Nombre}',
        @A_Paterno = '${req.body.Apellido_Paterno}',
        @A_Materno = '${req.body.Apellido_Materno}',
        @Colonia = '${req.body.Colonia}',
        @Calle = '${req.body.Calle}',
        @Numero = '${req.body.Numero}',
        @Correo_Electronico = '${req.body.Correo_Electronico}',
        @Celular = '${req.body.Celular}',
        @Id_Cliente = ${id}`);
        res.json({ 'Text': 'Tapa Cliente actualizado: ' + id });
    }

    public async detail(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const cliente = await pool.query(`EXEC DetailCliente @Id_Cliente = ${id}`);
        if (cliente.rowsAffected > 0) {
            console.log(cliente.recordset[0]);
            return res.json(cliente.recordset[0])
        }
        else {
            res.status(404).json({ Text: 'Cliente no existe 404 not found' + req.params.id })
        }
    }
}

export const clientes_Controllers = new Clientes_Controllers();
export default clientes_Controllers;