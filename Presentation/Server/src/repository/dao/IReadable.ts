interface IReadable<T,ID>{
    findAll(): Promise<Array<T>|null>;
    findById(id:ID): Promise<T|null>;
}
export default IReadable;

//le puse string por si no existe que retorne un mensaje que diga que el
//el usuario no se encuentra en la base de datos