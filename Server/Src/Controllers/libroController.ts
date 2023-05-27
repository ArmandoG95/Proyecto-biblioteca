import { Request, Response } from "express";
import pool from '../Database';


class LibroController {
    public async index(req: Request, res: Response): Promise<any> {
        const libros = await pool.query(`Ver_Libro_Sin_Lenguaje`);
        return res.json(libros.recordset);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query(`exec Insertar_Libro @Nombre_Libro = '${req.body.Nombre_Libro}', @ISBN = '${req.body.ISBN}', @Id_Autor = ${req.body.Id_Autor}, @Id_Editorial = ${req.body.Id_Editorial}, @Edicion = '${req.body.Edicion}', @Id_Genero_Literario = ${req.body.Id_Genero_Literario}, @Id_Tipo_Tapa = ${req.body.Id_Tipo_Tapa}, @Numero_Paginas = '${req.body.Numero_Paginas}', @Fecha_Publicacion = '${req.body.Fecha_Publicacion}', @Sinopsis = '${req.body.Sinopsis}'`);
        console.log(req);
        res.json({ 'Text': 'Libros creado' });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`exec Borrar_Libro @Id_Libro = ${id}`);
        res.json({ 'Text': 'Libro borrado: ' + id });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`exec Actualizar_Libro @Id_Libro = ${id}, @Nombre_Libro = '${req.body.Nombre_Libro}', @ISBN = '${req.body.ISBN}', @Id_Autor = ${req.body.Id_Autor}, @Id_Editorial = ${req.body.Id_Editorial}, @Edicion = '${req.body.Edicion}', @Id_Genero_Literario = ${req.body.Id_Genero_Literario}, @Id_Tipo_Tapa = ${req.body.Id_Tipo_Tapa}, @Numero_Paginas = '${req.body.Numero_Paginas}', @Fecha_Publicacion = '${req.body.Fecha_Publicacion}', @Sinopsis = '${req.body.Sinopsis}'`);
        res.json({ 'Text': 'Libro actualizado: ' + id });
    }

    public async detail(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const libro = await pool.query(`exec Ver_Detalle_Libro @Id_Libro = ${id}`)
        if (libro.rowsAffected > 0) {
            console.log(libro.recordset[0]);
            return res.json(libro.recordset[0]);
        }
        else {
            res.status(404).json({ 'Text': 'El libro no existe: ' + id });
        }
    }
}
export const libroController = new LibroController();
export default libroController;