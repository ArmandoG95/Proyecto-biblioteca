import { Request,Response } from 'express';
import  pool  from "../Database";

class Generos_Literarios_Controllers
{
    public async index(req: Request, res: Response) {
        const tipos_tapas = await pool.query('EXEC SelectGeneros_Literarios');
        res.json(tipos_tapas.recordset);
    }


    public async create(req: Request, res: Response): Promise<void> {
        await pool.query(`EXEC CreateGenero_Literario @Genero_Literario = '${req.body.Genero_Literario}', @Id_Estilo_Literario = ${req.body.Id_Estilo_Literario}`);
        console.log(req);
        res.json({ 'Text': 'Genero creado' });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`EXEC DeleteGenero_Literario @Id_Genero_Literario = '${id}'`);

        res.json({ Text: 'Genero borrado ' + id });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`EXEC UpdateGenero_Literario @Genero_Literario = '${req.body.Genero_Literario}', @Id_Estilo_Literario = ${req.body.Id_Estilo_Literario} ,@Id_Genero_Literario = ${id}`);
        res.json({ 'Text': 'Genero actualizado: ' + id });
    }

    public async detail(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const genero_literario = await pool.query(`EXEC DetailGenero_Literario @Id_Genero_Literario = ${id}`);
        if (genero_literario.rowsAffected > 0) {
            console.log(genero_literario.recordset[0]);
            return res.json(genero_literario.recordset[0])
        }
        else {
            res.status(404).json({ Text: 'Genero no existe 404 not found' + req.params.id })
        }
    }

    public async getEstilos(req: Request, res: Response) {
        const tipos_tapas = await pool.query('SELECT * FROM Estilos_Literarios');
        res.json(tipos_tapas.recordset);
    }
}
export const generos_Literarios_Controllers = new Generos_Literarios_Controllers();
export default generos_Literarios_Controllers;