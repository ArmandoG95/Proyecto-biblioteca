import { Request, Response } from "express";
import pool from '../Database';


class Libros2Controller {
    public async index(req: Request, res: Response): Promise<any> {
        const libros = await pool.query(`select L.*, A.Nombre, A.Apellidp_Paterno, E.Editorial, GL.Genero_Literario, TP.Tipo_Tapa
        from Libros2 L, Autores A, Editoriales E, Generos_Literarios GL, Tipos_Tapas TP
        where  L.Id_Autor = A.Id_Autor AND L.Id_Editorial = E.Id_Editorial AND L.Id_Genero_Literario = GL.Id_Genero_Literario AND L.Id_Tipo_Tapa = TP.Id_Tipo_Tapa`);
        return res.json(libros.recordset);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query(`insert into Libros2
		values ('${req.body.ISBN}', '${req.body.Nombre_Libro}', ${req.body.Id_Autor}, ${req.body.Id_Editorial}, '${req.body.Edicion}',
		${req.body.Id_Genero_Literario}, ${req.body.Id_Tipo_Tapa}, '${req.body.Numero_Paginas}', '${req.body.Fecha_Publicacion}',
		'${req.body.Sinopsis}', '${req.body.Imagen}')`);
        console.log(req);
        res.json({ 'Text': 'Libro creado' });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`DELETE FROM Libros2 Where Id_Libro = ${id}`);
        res.json({ 'Text': 'Libro borrado: ' + id });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`UPDATE Libros2 SET 
        Nombre_Libro = '${req.body.Nombre_Libro}', ISBN = '${req.body.ISBN}', Id_Autor = ${req.body.Id_Autor}, Id_Editorial = ${req.body.Id_Editorial}, Edicion = '${req.body.Edicion}', Id_Genero_Literario = ${req.body.Id_Genero_Literario}, Id_Tipo_Tapa = ${req.body.Id_Tipo_Tapa}, Numero_Paginas = '${req.body.Numero_Paginas}', Fecha_Publicacion = '${req.body.Fecha_Publicacion}', Sinopsis = '${req.body.Sinopsis}', Imagen = '${req.body.Imagen}'
		where Id_Libro = ${id}`);
        res.json({ 'Text': 'Libro actualizado: ' + id });
    }

    public async detail(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const libro = await pool.query(`SELECT * FROM Libros2 WHERE Id_Libro = ${id}`)
        if (libro.rowsAffected > 0) {
            console.log(libro.recordset[0]);
            return res.json(libro.recordset[0]);
        }
        else {
            res.status(404).json({ 'Text': 'El libro no existe: ' + id });
        }
    }
}
export const libros2Controller = new Libros2Controller();
export default libros2Controller;