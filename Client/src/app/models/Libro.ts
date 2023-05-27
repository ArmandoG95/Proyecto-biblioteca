export interface Libro
{
    Id_Libro?: number;
    ISBN?: string;
    Nombre_Libro?: string;
    Id_Autor?: number;
    Id_Editorial?: number;
    Edicion?: string;
    Id_Genero_Literario?: number;
    Id_Tipo_Tapa?: number;
    Numero_Paginas?: string;
    Fecha_Publicacion?: Date;
    Sinopsis?: string;
}