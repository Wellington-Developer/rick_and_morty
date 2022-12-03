interface OriginModel {
  name: string
  url: string
}

export interface CharacterModel {
  name: string
  status: string
  species: string
  origin: OriginModel
}
