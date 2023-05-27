create table Editoriales(
Id_Editorial tinyint primary key identity(1,1) not null,
Editorial varchar(45) not null,
Sede_Central varchar(60) not null,
Fundador varchar(40) not null
)

create table Lenguajes(
Id_Lenguaje tinyint primary key identity(1,1) not null,
Lenguaje varchar(30) not null
)

create table Libros(
Id_Libro int primary key identity(1,1) not null,
ISBN varchar(20) not null,
Nombre_Libro varchar(50) not null,
Id_Autor smallint not null,
Id_Editorial smallint not null,
Edicion varchar(15) not null,
Id_Genero_Literario tinyint not null,
Id_Tipo_Tapa tinyint not null,
Numero_Paginas varchar(5) not null,
Fecha_Publicacion date not null,
Sinopsis varchar(600) not null
)

create table Libros_Lenguajes(
Id_Libro_Lenguaje int primary key identity(1,1) not null, 
Id_Libro int not null,
Id_Lenguaje tinyint not null
)


-- Ejecutar con cada conexión
exec Creacion_Temporal_Lenguaje