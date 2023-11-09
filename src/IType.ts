export enum IStatus {
  READY = 'READY',
  PLAYING = 'PLAYING',
  PASSED = 'PASSED'
}

export const ALL_CARD_NAMES = [
  'bootstrap',
  'figma',
  'git',
  'github',
  'h5',
  'js',
  'node',
  'ts'
] as const

export type ICardName = typeof ALL_CARD_NAMES[number]

export interface ICard {
  id: string
  flipped: boolean
  name: ICardName
}

export interface IState {
  nonMatchedPairs: number
  highestRecord: number
  status: IStatus
  cards: ICard[]
  timeCost: number
}
