export interface IModel<T> {
  create(obj: T): Promise<T>,
  read(): Promise<T[]>,
  readById(_id: string): Promise<T | null>,
  update(_id: string, obj: T): Promise<T | null>,
  delete(): Promise<void>,
  deleteById(_id: string): Promise<T | null>,
}
