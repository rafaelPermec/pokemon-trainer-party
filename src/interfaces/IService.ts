export interface IService<T> {
  generatePokemon(): Promise<T[]>,
  generateItem(): Promise<T[]>,
  addPokemonName(newName: string): Promise<T>,
  addPokemonItem(): Promise<T>,
  removePokemonItem(): Promise<T>,
}
