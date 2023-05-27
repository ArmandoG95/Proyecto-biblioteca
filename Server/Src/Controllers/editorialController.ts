import { Request, Response } from "express";
import pool from '../Database';


class EditorialController {
    public async index(req: Request, res: Response): Promise<any> {
        const lenguajes = await pool.query(`exec Ver_Editoriales`);
        return res.json(lenguajes.recordset);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query(`exec Insertar_Editorial @Editorial = '${req.body.Editorial}', @Sede_Central = '${req.body.Sede_Central}', @Fundador = '${req.body.Fundador}'`);
        console.log(req);
        res.json({ 'Text': 'Editorial creada' });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`exec Borrar_Editorial @Id_Editorial = ${id}`);
        res.json({ 'Text': 'Editorial borrada: ' + id });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`exec Actualizar_Editorial @Editorial = '${req.body.Editorial}', @Sede_Central = '${req.body.Sede_Central}', @Fundador = '${req.body.Fundador}', @Id_Editorial = ${id}`);
        res.json({ 'Text': 'Editorial actualizada: ' + id });
    }

    public async detail(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const editorial = await pool.query(`exec Ver_Detalle_Editorial @Id_Editorial = ${id}`)
        if (editorial.rowsAffected > 0) {
            console.log(editorial.recordset[0]);
            return res.json(editorial.recordset[0]);
        }
        else {
            res.status(404).json({ 'Text': 'La editorial no existe: ' + id });
        }
    }
}
export const editorialController = new EditorialController();
export default editorialController;