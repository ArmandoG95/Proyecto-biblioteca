CREATE TABLE Lugares(
    Id_Lugar TINYINT IDENTITY(1,1) PRIMARY KEY NOT NULL,
    Lugar VARCHAR(40) NOT NULL
);

CREATE TABLE Premios(
    Id_Premio TINYINT IDENTITY(1,1) PRIMARY KEY NOT NULL,
    Premio VARCHAR(50) NOT NULL,
    Premio_Categoria VARCHAR(50) NOT NULL,
    Otorgado_Por VARCHAR(50) NOT NULL,
    Primera_Entrega DATE NOT NULL,
    Id_Lugar TINYINT NOT NULL,
    FOREIGN KEY (Id_Lugar) REFERENCES Lugares(Id_Lugar)
);

CREATE TABLE Estilos_Literarios(
    Id_Estilo_Literario TINYINT IDENTITY(1,1) PRIMARY KEY NOT NULL,
    Estilo_Literario VARCHAR(30) NOT NULL
);

CREATE TABLE Nacionalidades (
  Id_Nacionalidad tinyint IDENTITY(1,1) NOT NULL PRIMARY KEY,
  Nacionalidad varchar(60) NOT NULL
);

CREATE TABLE Autores(
    Id_Autor tinyint IDENTITY(1,1) NOT NULL PRIMARY KEY,
    Nombre VARCHAR (50) NOT NULL, 
    Apellid_Paterno VARCHAR(30) NOT NULL,
    Apellido_Materno VARCHAR(30) NOT NULL,
    Pseudonimo VARCHAR(30) NOT NULL,
    Id_Nacionalidad TINYINT NOT NULL,
    FOREIGN KEY (Id_Nacionalidad) REFERENCES Nacionalidades(Id_Nacionalidad)
);

CREATE TABLE Premios_Autores(
    Id_Premio_Autor TINYINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    Id_Premio TINYINT,
    Id_Autor TINYINT
);