export type CardType = {
  id:         number
  question:   string
  answer:     string
  side:       string
  categories: string[]
}

export type PostObject = {
  question:   string
  answer:     string
  side:       string
  categories: string[]
}

export type PutObject = {
  answer:     string
}