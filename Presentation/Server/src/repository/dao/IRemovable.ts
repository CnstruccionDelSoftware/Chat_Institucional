interface IRemovable<T>{
    delete(entity:T):Promise<void>;
}

export default IRemovable;