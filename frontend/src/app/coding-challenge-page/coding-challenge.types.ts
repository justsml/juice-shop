export enum ResultState {
  Undecided = 0,
  Right = 1,
  Wrong = 2
}

export interface RandomFixes {
  fix: string
  index: number
}
