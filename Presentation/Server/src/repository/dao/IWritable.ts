interface IWritable<T>{
    create(entity:T): Promise<boolean>;
    modify(entity:T): Promise<T|null>;
}

export default IWritable;