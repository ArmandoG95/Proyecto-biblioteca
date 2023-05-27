--------------------------------------------------------------------------- Editoriales

---------------------- Ver
create procedure Ver_Editoriales
as
select * from Editoriales

exec Ver_Editoriales

---------------------- Insertar y actualizar
create procedure Insertar_Actualizar_Editorial
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

exec Insertar_Actualizar_Editorial @Editorial = 'Patitos', @Sede_Central = 'Hidalgo', @Fundador = 'Emigdio'

---------------------- Insertar
create procedure Insertar_Editorial
	@Editorial varchar(45),
	@Sede_Central varchar(60),
	@Fundador varchar(40)
as
begin
insert into Editoriales
values (@Editorial, @Sede_Central, @Fundador)
end

---------------------- Borrar
create procedure Borrar_Editorial
	@Id_Editorial tinyint
as
delete from Editoriales where Id_Editorial = @Id_Editorial

exec Borrar_Editorial @Id_Editorial = 3

---------------------- Actualizar 
create procedure Actualizar_Editorial
	@Id_Editorial tinyint,
	@Editorial varchar(45),
	@Sede_Central varchar(60),
	@Fundador varchar(40)
as
update Editoriales set Editorial = @Editorial, Sede_Central = @Sede_Central, Fundador = @Fundador where Id_Editorial = @Id_Editorial

exec Actualizar_Editorial @Editorial = 'Pat', @Sede_Central = 'Pachuca', @Fundador = 'Armando', @Id_Editorial = 1

---------------------- ver detalle 
create procedure Ver_Detalle_Editorial
	@Id_Editorial tinyint
as
select * from Editoriales where Id_Editorial = @Id_Editorial

exec Ver_Detalle_Editorial @Id_Editorial = 1

--------------------------------------------------------------------------- Lenguajes

---------------------- Ver
create procedure Ver_Lenguajes
as
select * from Lenguajes

exec Ver_Lenguajes

---------------------- Insertar
create procedure Insertar_Lenguaje
	@Lenguaje varchar(30)
as
insert into Lenguajes
values (@Lenguaje)

exec Insertar_Lenguaje @Lenguaje = 'Ruso'

---------------------- Borrar
create procedure Borrar_Lenguaje
	@Id_Lenguaje tinyint
as
delete from Lenguajes where Id_Lenguaje = @Id_Lenguaje

exec Borrar_Lenguaje @Id_Lenguaje = 19

---------------------- Actualizar 
create procedure Actualizar_Lenguaje
	@Lenguaje varchar(30),
	@Id_Lenguaje tinyint
as
update Lenguajes set Lenguaje = @Lenguaje where Id_Lenguaje = @Id_Lenguaje

exec Actualizar_Lenguaje @Lenguaje = 'Aleman', @Id_Lenguaje = 17

---------------------- ver detalle 
create procedure Ver_Detalle_Lenguaje
	@Id_Lenguaje tinyint
as
select * from Lenguajes where Id_Lenguaje = @Id_Lenguaje

select * from Lenguajes where Id_Lenguaje = 2



--------------------------------------------------------------------------- Libros

---------------------- Ver libros
create or alter procedure Ver_Libro
as
select l.*, le.Lenguaje, e.Editorial 
from Libros L, Editoriales e, Lenguajes le, Libros_Lenguajes ll 
where l.Id_Editorial = e.Id_Editorial and l.Id_Libro = ll.Id_Libro and le.Id_Lenguaje = ll.Id_Lenguaje

---------------------- Ver libros sin lenguaje
create or alter procedure Ver_Libro_Sin_Lenguaje
as
 select l.*, e.Editorial, a.Nombre, gl.Genero_Literario, tt.Tipo_Tapa, le.Lenguaje
from Libros L, Editoriales e, Autores a, Generos_Literarios gl, Tipos_Tapas tt, Lenguajes le, Libros_Lenguajes ll
where l.Id_Editorial = e.Id_Editorial and l.Id_Autor = a.Id_Autor and l.Id_Genero_Literario = gl.Id_Genero_Literario
	and tt.id_tipo_tapa = l.Id_Tipo_Tapa and l.Id_Libro = ll.Id_Libro and ll.Id_Lenguaje = le.Id_Lenguaje

---------------------- Borrar libro
create procedure Borrar_Libro
	@Id_Libro int
as
delete from Libros where Id_Libro = @Id_Libro

exec Borrar_Libro @Id_Libro = 2

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

---------------------- Ver detalle de libro
create or alter procedure Ver_Detalle_Libro
	@Id_Libro int
as
select * from Libros where Id_Libro = @Id_Libro


--------------------------------------------------------------------------- Lenguajes_Temporal

---------------------- Creacion de tabla temporal
create or alter procedure Creacion_Temporal_Lenguaje
as
create table ##Lenguajes_Boyce(
Id_Temporal int primary key identity(1, 1) not null,
Id_Lenguaje tinyint not null
)

exec Creacion_Temporal_Lenguaje

---------------------- Ver tabla temporal
create or alter procedure Ver_Temporal_Lenguaje
as
select lb.Id_Temporal, lb.Id_Lenguaje, l.Lenguaje from ##Lenguajes_Boyce lb, Lenguajes l where lb.Id_Lenguaje = l.Id_Lenguaje

exec Ver_Temporal_Lenguaje

---------------------- Insertar en tabla temporal
create procedure Insertar_Temporal_Lenguaje
	@Id_Lenguaje tinyint
as
insert into ##Lenguajes_Boyce values (@Id_Lenguaje)

exec Insertar_Temporal_Lenguaje @Id_Lenguaje = 12

---------------------- Actualizar en tabla temporal
create or alter procedure Actualizar_Lenguaje
	@Lenguaje varchar(30),
	@Id_Lenguaje tinyint
as
update Lenguajes set Lenguaje = @Lenguaje where Id_Lenguaje = @Id_Lenguaje

---------------------- Borrar en tabla temporal
create or alter procedure Borrar_Temporal_Lenguaje
	@Id_Temporal int
as
delete from ##Lenguajes_Boyce where Id_Temporal = @Id_Temporal

---------------------- Ver detalle en tabla temporal
create   procedure Ver_Temporal_Detalle_Lenguaje
	@Id_Temporal int
as
select * from ##Lenguajes_Boyce where Id_Temporal = @Id_Temporal


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

---------------------- Ver detalle libros lenguajes
create or alter procedure Ver_Detalla_Libro_Lenguaje
	@Id_Libro_Lenguaje int
as
select * from Libros_Lenguajes where Id_Libro_Lenguaje = @Id_Libro_Lenguaje


--------------------------------------------------------------------------- Triggers

---------------------- Trigger para borrar registros de libros lenguajes
create or alter trigger Borrar_Registros_Libros_Lenguajes
on Libros
after delete
as
delete from Libros_Lenguajes where Id_Libro in (select d.Id_Libro from deleted d)

---------------------- Trigger para borrar registros de temporal
create or alter trigger Borrar_Registros_Temporal
on Libros_Lenguajes
after insert
as
delete from ##Lenguajes_Boyce












select ll.Id_Lenguaje
from Libros_Lenguajes ll
where ll.Id_Libro = 58

select * from ##Lenguajes_Boyce
select * from Libros_Lenguajes
select * from Libros

delete from ##Lenguajes_Boyce

insert into ##Lenguajes_Boyce
select ll.Id_Lenguaje
from Libros_Lenguajes ll
where ll.Id_Libro = 58
go