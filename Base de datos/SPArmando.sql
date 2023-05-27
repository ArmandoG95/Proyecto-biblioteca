-----TAPAS
-- Select 
CREATE OR ALTER PROCEDURE SelectTipos_Tapas
AS 
BEGIN 
SELECT * FROM Tipos_Tapas
END
go

-- Create
CREATE OR ALTER PROCEDURE CreateTipos_Tapas
	@Tipo_Tapa VARCHAR(30)
AS 
BEGIN 
INSERT INTO Tipos_Tapas values (@Tipo_Tapa)
END

go

--  Delete
CREATE OR ALTER PROCEDURE DeleteTipos_Tapas
	@id_tipo_tapa tinyint
AS 
BEGIN 
delete from Tipos_Tapas where id_tipo_tapa = @id_tipo_tapa
END

go

--  Update
CREATE OR ALTER PROCEDURE UpdateTipo_tapa
	@id_tipo_tapa TINYINT,
	@Tipo_Tapa VARCHAR(80)
AS
BEGIN
UPDATE Tipos_Tapas SET Tipo_Tapa = @Tipo_Tapa WHERE id_tipo_tapa = @id_tipo_tapa
END

go

--DETAIL
CREATE OR ALTER PROCEDURE DetailTipos_tapas
	@id_tipo_tapa TINYINT
AS
BEGIN
SELECT * FROM Tipos_Tapas WHERE id_tipo_tapa = @id_tipo_tapa
END
go

---NACIONALIDADES
-- Select 
CREATE OR ALTER PROCEDURE SelectNaciones
AS 
BEGIN 
SELECT * FROM Nacionalidades
END
go

-- Create
CREATE OR ALTER PROCEDURE CreateNaciones
	@Nacionalidad VARCHAR(80)
AS 
BEGIN 
INSERT INTO Nacionalidades values (@Nacionalidad)
END

go

--  Delete
CREATE OR ALTER PROCEDURE DeleteNaciones
	@Id_Nacionalidad tinyint
AS 
BEGIN 
delete from Nacionalidades	 where Id_Nacionalidad = @Id_Nacionalidad
END

go

--  Update
CREATE OR ALTER PROCEDURE UpdateNacion
	@Id_Nacionalidad TINYINT,
	@Nacionalidad  VARCHAR(80)
AS
BEGIN
UPDATE Nacionalidades SET Nacionalidad = @Nacionalidad WHERE Id_Nacionalidad = @Id_Nacionalidad
END

go

--DETAIL
CREATE OR ALTER PROCEDURE DetailNacion
	@Id_Nacionalidad TINYINT
AS
BEGIN
SELECT * FROM Nacionalidades WHERE Id_Nacionalidad = @Id_Nacionalidad
END
go


-- Select 
CREATE OR ALTER PROCEDURE SelectGeneros_Literarios
AS 
BEGIN 
Select GL.*, EL.Estilo_Literario from Generos_Literarios GL, Estilos_Literarios EL
WHERE GL.Id_Estilo_Literario = EL.Id_Estilo_Literario
END
go

-- Create
CREATE OR ALTER PROCEDURE CreateGenero_Literario
	@Genero_Literario VARCHAR(50),
	@Id_Estilo_Literario tinyint
AS 
BEGIN 
INSERT INTO Generos_Literarios values (@Genero_Literario, @Id_Estilo_Literario)
END
go

--  Delete
CREATE OR ALTER PROCEDURE DeleteGenero_Literario
	@Id_Genero_Literario tinyint
AS 
BEGIN 
delete from Generos_Literarios where Id_Genero_Literario = @Id_Genero_Literario
END
go

--  Update
CREATE OR ALTER PROCEDURE UpdateGenero_Literario
	@Id_Genero_Literario TINYINT,
	@Genero_Literario  VARCHAR(80),
	@Id_Estilo_Literario TINYINT
AS
BEGIN
UPDATE Generos_Literarios SET Genero_Literario = @Genero_Literario, Id_Estilo_Literario = @Id_Estilo_Literario WHERE Id_Genero_Literario = @Id_Genero_Literario
END
go

--DETAIL
CREATE OR ALTER PROCEDURE DetailGenero_Literario
	@Id_Genero_Literario TINYINT
AS
BEGIN
SELECT * FROM Generos_Literarios WHERE Id_Genero_Literario = @Id_Genero_Literario
END
go

------CLIENTES
-- Select 
CREATE OR ALTER PROCEDURE SelectCliente
AS 
BEGIN 
SELECT * FROM Clientes
END
go

-- Create
CREATE OR ALTER PROCEDURE CreateCliente
	@Nombre VARCHAR(80),
	@A_Paterno VARCHAR(80),
	@A_Materno VARCHAR(80),
	@Colonia VARCHAR (80),
	@Calle VARCHAR (80),
	@Numero VARCHAR (80),
	@Correo_Electronico VARCHAR (MAX),
	@Celular VARCHAR (10)
AS 
BEGIN 
INSERT INTO Clientes values (@Nombre,@A_Paterno,@A_Materno,@Colonia,@Calle,@Numero,@Correo_Electronico,@Celular)
END
go

--  Delete
CREATE OR ALTER PROCEDURE DeleteCliente
	@Id_Cliente tinyint
AS 
BEGIN 
delete from Clientes	 where Id_Cliente = @Id_Cliente
END
go

--  Update
CREATE OR ALTER PROCEDURE UpdatCliente
	@Id_Cliente TINYINT,
	@Nombre VARCHAR(80),
	@A_Paterno VARCHAR(80),
	@A_Materno VARCHAR(80),
	@Colonia VARCHAR (80),
	@Calle VARCHAR (80),
	@Numero VARCHAR (80),
	@Correo_Electronico VARCHAR (MAX),
	@Celular VARCHAR (10)
AS
BEGIN
UPDATE Clientes SET Nombre = @Nombre, Apellido_Paterno = @A_Paterno, Apellido_Materno = @A_Materno, Colonia = @Colonia,
Calle = @Calle, Numero= @Numero, Correo_Electronico = @Correo_Electronico, Celular = @Celular
WHERE Id_Cliente = @Id_Cliente
END
go

--DETAIL
CREATE OR ALTER PROCEDURE DetailCliente
	@Id_Cliente TINYINT
AS
BEGIN
SELECT * FROM Clientes WHERE Id_Cliente = @Id_Cliente
END
go






