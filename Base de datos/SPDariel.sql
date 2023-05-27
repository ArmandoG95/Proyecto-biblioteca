--------------------------------------------------------------------------- Editoriales

---------------------- Ver
create  or alter procedure Ver_Editoriales
as
select * from Editoriales

go

---------------------- Insertar y actualizar
create  or alter procedure Insertar_Actualizar_Editorial
	@Editorial varchar(45),
	@Sede_Central varchar(60),
	@Fundador varchar(40)
as
if exists (select 1 from Editoriales where Editorial = @Editorial)
	begin
		update Editoriales set
		Sede_Central = @Sede_Central,
		Fundador = @Fundador
		where Editorial = @Editorial
	end
else
	begin
		insert into Editoriales
		values (@Editorial, @Sede_Central, @Fundador)
	end
go


---------------------- Insertar
create  or alter procedure Insertar_Editorial
	@Editorial varchar(45),
	@Sede_Central varchar(60),
	@Fundador varchar(40)
as
begin
insert into Editoriales
values (@Editorial, @Sede_Central, @Fundador)
end
go

---------------------- Borrar
create or alter procedure Borrar_Editorial
	@Id_Editorial tinyint
as
delete from Editoriales where Id_Editorial = @Id_Editorial
go
---------------------- Actualizar 
create  or alter procedure Actualizar_Editorial
	@Id_Editorial tinyint,
	@Editorial varchar(45),
	@Sede_Central varchar(60),
	@Fundador varchar(40)
as
update Editoriales set Editorial = @Editorial, Sede_Central = @Sede_Central, Fundador = @Fundador where Id_Editorial = @Id_Editorial

go
---------------------- ver detalle 
create  or alter procedure Ver_Detalle_Editorial
	@Id_Editorial tinyint
as
select * from Editoriales where Id_Editorial = @Id_Editorial
go
--------------------------------------------------------------------------- Lenguajes

---------------------- Ver
create  or alter procedure Ver_Lenguajes
as
select * from Lenguajes
go

---------------------- Insertar
create  or alter procedure Insertar_Lenguaje
	@Lenguaje varchar(30)
as
insert into Lenguajes
values (@Lenguaje)
go

---------------------- Borrar
create  or alter procedure Borrar_Lenguaje
	@Id_Lenguaje tinyint
as
delete from Lenguajes where Id_Lenguaje = @Id_Lenguaje
go

---------------------- Actualizar 
create  or alter procedure Actualizar_Lenguaje
	@Lenguaje varchar(30),
	@Id_Lenguaje tinyint
as
update Lenguajes set Lenguaje = @Lenguaje where Id_Lenguaje = @Id_Lenguaje
go

---------------------- ver detalle 
create or alter procedure Ver_Detalle_Lenguaje
	@Id_Lenguaje tinyint
as
select * from Lenguajes where Id_Lenguaje = @Id_Lenguaje
go


--------------------------------------------------------------------------- Libros

---------------------- Ver libros
create or alter procedure Ver_Libro
as
select l.*, le.Lenguaje, e.Editorial 
from Libros L, Editoriales e, Lenguajes le, Libros_Lenguajes ll 
where l.Id_Editorial = e.Id_Editorial and l.Id_Libro = ll.Id_Libro and le.Id_Lenguaje = ll.Id_Lenguaje
go
---------------------- Ver libros sin lenguaje
create or alter procedure Ver_Libro_Sin_Lenguaje
as
 select l.*, e.Editorial, a.Nombre, gl.Genero_Literario, tt.Tipo_Tapa, le.Lenguaje
from Libros L, Editoriales e, Autores a, Generos_Literarios gl, Tipos_Tapas tt, Lenguajes le, Libros_Lenguajes ll
where l.Id_Editorial = e.Id_Editorial and l.Id_Autor = a.Id_Autor and l.Id_Genero_Literario = gl.Id_Genero_Literario
	and tt.id_tipo_tapa = l.Id_Tipo_Tapa and l.Id_Libro = ll.Id_Libro and ll.Id_Lenguaje = le.Id_Lenguaje

go


---------------------- Borrar libro
create or alter procedure Borrar_Libro
	@Id_Libro int
as
delete from Libros where Id_Libro = @Id_Libro
go


---------------------- Insertar libro  
create or alter procedure Insertar_Libro
	@ISBN varchar(20),
	@Nombre_Libro varchar(50),
	@Id_Autor smallint,
	@Id_Editorial smallint,
	@Edicion varchar(15),
	@Id_Genero_Literario tinyint,
	@Id_Tipo_Tapa tinyint,
	@Numero_Paginas varchar(5),
	@Fecha_Publicacion date,
	@Sinopsis varchar(600)
as
begin
insert into Libros
		values (@ISBN, @Nombre_Libro, @Id_Autor, @Id_Editorial, @Edicion,
		@Id_Genero_Literario, @Id_Tipo_Tapa, @Numero_Paginas, @Fecha_Publicacion,
		@Sinopsis)
end
go


---------------------- Actualizar libro
create or alter procedure Actualizar_Libro
	@Id_Libro int,
	@ISBN varchar(20),
	@Nombre_Libro varchar(50),
	@Id_Autor smallint,
	@Id_Editorial smallint,
	@Edicion varchar(15),
	@Id_Genero_Literario tinyint,
	@Id_Tipo_Tapa tinyint,
	@Numero_Paginas varchar(5),
	@Fecha_Publicacion date,
	@Sinopsis varchar(600)
as
begin
		update Libros set
		Nombre_Libro = @Nombre_Libro,
		ISBN = @ISBN,
		Id_Autor = @Id_Autor,
		Id_Editorial = @Id_Editorial,
		Edicion = @Edicion,
		Id_Genero_Literario = @Id_Genero_Literario,
		Id_Tipo_Tapa = @Id_Tipo_Tapa,
		Numero_Paginas = @Numero_Paginas,
		Fecha_Publicacion = @Fecha_Publicacion,
		Sinopsis = @Sinopsis
		where Id_Libro = @Id_Libro
end
go

---------------------- Ver detalle de libro
create or alter procedure Ver_Detalle_Libro
	@Id_Libro int
as
select * from Libros where Id_Libro = @Id_Libro
go

--------------------------------------------------------------------------- Lenguajes_Temporal

---------------------- Creacion de tabla temporal
create or alter procedure Creacion_Temporal_Lenguaje
as
create table ##Lenguajes_Boyce(
Id_Temporal int primary key identity(1, 1) not null,
Id_Lenguaje tinyint not null
)
go

---------------------- Ver tabla temporal
create or alter procedure Ver_Temporal_Lenguaje
as
select lb.Id_Temporal, lb.Id_Lenguaje, l.Lenguaje from ##Lenguajes_Boyce lb, Lenguajes l where lb.Id_Lenguaje = l.Id_Lenguaje
go


---------------------- Insertar en tabla temporal
create  or alter procedure Insertar_Temporal_Lenguaje
	@Id_Lenguaje tinyint
as
insert into ##Lenguajes_Boyce values (@Id_Lenguaje)
go

---------------------- Actualizar en tabla temporal
create or alter procedure Actualizar_Lenguaje
	@Lenguaje varchar(30),
	@Id_Lenguaje tinyint
as
update Lenguajes set Lenguaje = @Lenguaje where Id_Lenguaje = @Id_Lenguaje
go

---------------------- Borrar en tabla temporal
create or alter procedure Borrar_Temporal_Lenguaje
	@Id_Temporal int
as
delete from ##Lenguajes_Boyce where Id_Temporal = @Id_Temporal
go


---------------------- Ver detalle en tabla temporal
create  or alter  procedure Ver_Temporal_Detalle_Lenguaje
	@Id_Temporal int
as
select * from ##Lenguajes_Boyce where Id_Temporal = @Id_Temporal
go

--------------------------------------------------------------------------- Libros_Lenguajes

---------------------- Insertar en libros lenguajes
create or alter procedure Insertar_Libros_Lenguajes
as
begin
SET IDENTITY_INSERT Libros ON
select Max(l.Id_Libro) from Libros l
insert into Libros_Lenguajes
select IDENT_CURRENT('Libros'), lb.Id_Lenguaje
from ##Lenguajes_Boyce lb, Lenguajes le
where lb.Id_Lenguaje = le.Id_Lenguaje
SET IDENTITY_INSERT Libros off
end
go

---------------------- Ver detalle libros lenguajes
create or alter procedure Ver_Detalla_Libro_Lenguaje
	@Id_Libro_Lenguaje int
as
select * from Libros_Lenguajes where Id_Libro_Lenguaje = @Id_Libro_Lenguaje
go

--------------------------------------------------------------------------- Triggers

---------------------- Trigger para borrar registros de libros lenguajes
create or alter trigger Borrar_Registros_Libros_Lenguajes
on Libros
after delete
as
delete from Libros_Lenguajes where Id_Libro in (select d.Id_Libro from deleted d)
go

---------------------- Trigger para borrar registros de temporal
create or alter trigger Borrar_Registros_Temporal
on Libros_Lenguajes
after insert
as
delete from ##Lenguajes_Boyce
go


exec Creacion_Temporal_Lenguaje
