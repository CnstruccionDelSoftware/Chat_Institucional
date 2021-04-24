interface IWritable<T>{
    create(entity:T): void;
    modify(entity:T): void;
}

export default IWritable;