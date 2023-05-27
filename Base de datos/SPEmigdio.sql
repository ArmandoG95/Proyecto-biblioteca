-- STORED PROCEDURE de Lugares
-- Select
CREATE PROCEDURE SelectLugares
AS 
BEGIN 
SELECT * FROM Lugares 
END

-- Create
CREATE PROCEDURE createLugares
	@Lugar varchar(40)
AS 
BEGIN 
insert into Lugares values (@Lugar)
END

-- Delete 
CREATE PROCEDURE deleteLugares
	@IdLugar tinyint
AS 
BEGIN 
delete from Lugares where Id_Lugar = @IdLugar
END

-- Update
CREATE PROCEDURE updateLugares
	@IdLugar tinyint,
	@Lugar VARCHAR(40)
AS 
BEGIN 
UPDATE Lugares SET Lugar = @Lugar WHERE Id_Lugar = @IdLugar
END


-- Detail 
CREATE PROCEDURE detailLugares
	@IdLugar tinyint
AS 
BEGIN 
SELECT * FROM Lugares WHERE Id_Lugar = @IdLugar
END

-- STORED PROCEDURES para PREMIOS

-- Select 
CREATE PROCEDURE SelectPremios 
AS 
BEGIN 
SELECT * FROM Premios
END

-- Create
CREATE PROCEDURE CreatePremios
	@Premio VARCHAR(50),
	@Premio_Categoria VARCHAR (50),
	@Otorgado_Por VARCHAR(50),
	@Primera_Entrega DATE,
	@Id_Lugar TINYINT
AS 
BEGIN 
INSERT INTO Premios values (@Premio, @Premio_Categoria, @Otorgado_Por, @Primera_Entrega, @Id_Lugar)
END

--  Delete
CREATE PROCEDURE DeletePremios
	@IdPremio tinyint
AS 
BEGIN 
delete from Premios where Id_Premio = @IdPremio
END

-- Update
CREATE PROCEDURE UpdatePremios
	@IdPremio TINYINT,
	@Premio VARCHAR(50),
	@Premio_Categoria VARCHAR (50),
	@Otorgado_Por VARCHAR(50),
	@Primera_Entrega DATE,
	@Id_Lugar TINYINT
AS 
BEGIN 
UPDATE Premios SET Premio = @Premio, Premio_Categoria = @Premio_Categoria, Otorgado_Por = @Otorgado_Por,
Primera_Entrega = @Primera_Entrega, Id_Lugar = @Id_Lugar
WHERE Id_Premio = @IdPremio
END

-- Detail
CREATE PROCEDURE DetailPremios
	@IdPremio tinyint
AS 
BEGIN 
SELECT * FROM Premios WHERE Id_Premio = @IdPremio
END


-- STORED PROCEDURES para ESTILOS_LITERARIOS

-- Select 
CREATE PROCEDURE SelectEstilos 
AS 
BEGIN 
SELECT * FROM Estilos_Literarios
END

-- Create
CREATE OR ALTER PROCEDURE CreateEstilos
	@Estilo_Literario VARCHAR(30)
AS 
BEGIN 
INSERT INTO Estilos_Literarios values (@Estilo_Literario)
END

--  Delete
CREATE PROCEDURE DeleteEstilos
	@IdEstiloLiterario tinyint
AS 
BEGIN 
delete from Estilos_Literarios where Id_Estilo_Literario = @IdEstiloLiterario
END

--  Update
CREATE PROCEDURE UpdateEstilos
	@IdEstiloLiterario TINYINT,
	@Estilo_Literario VARCHAR(30)
AS
BEGIN
UPDATE Estilos_Literarios SET Estilo_Literario = @Estilo_Literario WHERE Id_Estilo_Literario = @IdEstiloLiterario
END

--DETAIL
CREATE PROCEDURE DetailEstilo
	@IdEstiloLiterario TINYINT
AS
BEGIN
SELECT * FROM Estilos_Literarios WHERE Id_Estilo_Literario = @IdEstiloLiterario
END



---------========-=========STORED PROCEDURES Autores

--Select
CREATE PROCEDURE SelectAutores
AS 
BEGIN
SELECT A.*, N.Nacionalidad FROM Autores A, Nacionalidades N WHERE A.Id_Nacionalidad = N.Id_Nacionalidad
END

-- Create
CREATE OR ALTER PROCEDURE CreateAutores
	@Nombre VARCHAR(50),
	@Apellido_Paterno VARCHAR(30),
	@Apellido_Materno VARCHAR(30),
	@Pseudonimo VARCHAR(30),
	@Id_Nacionalidad TINYINT
AS 
BEGIN 
INSERT INTO Autores VALUES (@Nombre, @Apellido_Paterno, @Apellido_Materno, @Pseudonimo, @Id_Nacionalidad )
END

--  Delete
CREATE PROCEDURE DeleteAutores
	@Id_Autor tinyint
AS 
BEGIN 
delete from Autores where Id_Autor = @Id_Autor
END

--  Update
CREATE PROCEDURE UpdateAutores
	@Id_Autor TINYINT,
	@Nombre VARCHAR(50),
	@Apellido_Paterno VARCHAR(30),
	@Apellido_Materno VARCHAR(30),
	@Pseudonimo VARCHAR(30),
	@Id_Nacionalidad TINYINT

AS
BEGIN
UPDATE Autores SET Nombre = @Nombre, Apellido_Paterno = @Apellido_Paterno, Apellido_Materno = @Apellido_Materno, Pseudonimo = @Pseudonimo, Id_Nacionalidad = @Id_Nacionalidad WHERE Id_Autor = @Id_Autor
END

--DETAIL
CREATE PROCEDURE DetailAutor
	@Id_Autor TINYINT
AS
BEGIN
SELECT * FROM Autores WHERE Id_Autor = @Id_Autor
END


-----STORED PROCEDURES BOYCE CODD Premios_Autores

--Select
CREATE PROCEDURE SelectPremiosAutores
AS
BEGIN 
SELECT PA.*, P.*, A.*  FROM Premios_Autores PA, Premios P, Autores A WHERE PA.Id_Premio = P.Id_Premio AND PA.Id_Autor = A.Id_Autor
END

-- Create

CREATE PROCEDURE CreatePremiosAutores
	@Id_Premio TINYINT,
	@Id_Autor TINYINT
AS 
BEGIN 
INSERT INTO Premios_Autores VALUES (@Id_Premio, @Id_Autor)
END


--  Delete
CREATE or alter PROCEDURE DeletePremiosAutores
	@Id_Premio_Autor TINYINT
AS 
BEGIN 
DELETE FROM Premios_Autores WHERE Id_Premio_Autor = @Id_Premio_Autor 
END

--Detail
CREATE or alter PROCEDURE DetailPremioAutor
		@Id_Premio_Autor TINYINT
AS
BEGIN 
SELECT *  FROM Premios_Autores WHERE Id_Premio_Autor = @Id_Premio_Autor
END


--=======================ARMANDO======================================
--INICIO DE PROCEDURES DE TABLA NACIONALIDADES

-- Select 
CREATE PROCEDURE SelectNaciones
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
CREATE PROCEDURE DeleteNaciones
	@Id_Nacionalidad tinyint
AS 
BEGIN 
delete from Nacionalidades	 where Id_Nacionalidad = @Id_Nacionalidad
END

go

--  Update
CREATE PROCEDURE UpdateNacion
	@Id_Nacionalidad TINYINT,
	@Nacionalidad  VARCHAR(80)
AS
BEGIN
UPDATE Nacionalidades SET Nacionalidad = @Nacionalidad WHERE Id_Nacionalidad = @Id_Nacionalidad
END

go

--DETAIL
CREATE PROCEDURE DetailNacion
	@Id_Nacionalidad TINYINT
AS
BEGIN
SELECT * FROM Nacionalidades WHERE Id_Nacionalidad = @Id_Nacionalidad
END
--================FIN DE PROCEDURES DE TABLA NACIONALIDADES