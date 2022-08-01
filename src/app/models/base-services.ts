export interface BaseService<T> {
    getAll():Promise<T[]>;
}