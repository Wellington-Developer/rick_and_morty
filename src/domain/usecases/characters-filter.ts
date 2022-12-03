import { CharacterModel } from '../models/character-model'

interface CharacterParams {
  name: string
}

export interface CharacterFilter {
  get (params: CharacterParams): Promise<CharacterModel>
}
