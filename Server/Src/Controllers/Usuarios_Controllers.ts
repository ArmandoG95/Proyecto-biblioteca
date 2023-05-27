import { Request, Response } from 'express';
import pool from "../Database";

class Usuarios_Controllers {
  //GET
  public async index(req: Request, res: Response) {
    const usuarios = await pool.query('exec SelectUsuarios');
    res.json(usuarios.recordset);
  }

  public async insert(req: Request, res: Response): Promise<void> {
    await pool.query(`exec insertUsuario @Usuario= '${req.body.Usuario}', @password = '${req.body.password}', 
        @id_Rol= ${req.body.id_Rol}`)
    res.json({ Text: 'Usuario guardado' });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query(`exec DeleteUsuario @id_usuario = ${id}`);

    res.json({ Text: 'Usuarios borrado: ' + id });
  }

  public async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query(`exec updateUsuario @id_usuario = ${id},
        @usuario = '${req.body.Usuario}', 
        @password = '${req.body.password}',
        @id_Rol = ${req.body.id_Rol}`);
    res.json({ 'Text': 'Usuario actualizado: ' + id });
  }

  public async detail(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const usuario = await pool.query(`exec selectUsuario @id_usuario = ${id}`);
    if (usuario.rowsAffected > 0) {
      console.log(usuario.recordset[0]);
      return res.json(usuario.recordset[0])
    }
    else {
      res.status(404).json({ Text: 'Cliente no existe 404 not found' + req.params.id })
    }
  }

  public async login(req: Request, res: Response) {
    const usuario = req.body.Usuario;
    const password = req.body.password;
    try {
      const result = await pool.request()
        .input('Usuario', usuario)
        .input('password', password)
        .query('SELECT id_usuario, Usuario FROM Usuarios WHERE Usuario = @usuario AND password = @password');

      if (result.recordset.length === 0) {
        res.status(401).send({ message: 'Nombre de usuario o contraseña incorrectos.' });
        return;
      }

      const user = result.recordset[0];
      res.send({
        id: user.id_usuario,
        username: user.Usuario
      });
    }
    catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo más tarde.' });
    }

  }

}
export const usuarios_Controllers = new Usuarios_Controllers();
export default usuarios_Controllers;