interface IReadable<T,ID>{
    findAll(): Array<T> | string;
    findById(id:ID): T | string;
}
export default IReadable;

//le puse string por si no existe que retorne un mensaje que diga que el
//el usuario no se encuentra en la base de datos