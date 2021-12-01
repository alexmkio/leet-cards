export type CardType = {
  id:         number
  question:   string
  answer:     string
  side:       string
  categories: string[]
}

export interface PostObject {
  question:   string;
  answer:     string;
  side:       string;
  categories: string[];
}