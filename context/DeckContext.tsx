import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { CardType, PutObject } from '../types/index'
import { getData } from '../utils/apiCalls'

type deckContextType = {
  deck: CardType[];
  sortedDeck: CardType[];
  filter: string;
  addCard: (card: CardType) => void;
  updateCard: (id: Number | undefined, putObject: PutObject) => void;
  removeCard: (card: CardType) => void;
  filterDeck: (stack: string) => void;
}

const deckContextDefaultValues: deckContextType = {
  deck: [],
  sortedDeck: [],
  filter: '',
  addCard: (card) => {},
  updateCard: (id, putObject) => {},
  removeCard: (card) => {},
  filterDeck: (stack) => {},
}

const DeckContext = createContext<deckContextType>(deckContextDefaultValues);

type Props = {
  children: ReactNode;
}

export function DeckProvider({ children }: Props) {
  const [deck, setDeck] = useState<CardType[]>([]);
  const [sortedDeck, setSorted] = useState<CardType[]>([]);
  const [filter, setFilter] = useState<string>('FS');

  const fetchDeck = async () => {
    try {
      let fetched = await getData('cards')
      setDeck(fetched)
      setSorted(fetched)
    } catch (error) {
      //shore this up
      console.log('DeckContext - fetchDeck', error)
    }
  }

  useEffect(() => {
    fetchDeck()
  }, [])

  const addCard = (card: CardType) => {
    setDeck([...deck, card])
    filterDeck(filter)
  }

  const updateCard = (id: Number | undefined, putObject: PutObject) => {
    let ind = deck.findIndex(card => card.id === id)
    let currentDeck = deck
    currentDeck[ind].answer = putObject.answer
    setDeck([...currentDeck])
    filterDeck(filter)
  }

  const removeCard = (card: CardType) => {
    let ind = deck.findIndex(currentCard => currentCard.id === card.id)
    let currentDeck = deck
    currentDeck.splice(ind, 1)
    setDeck([...currentDeck])
    filterDeck(filter)
  }

  const filterDeck = (stack: string) => {
    setFilter(stack)
    if (stack === 'FS') {
      setSorted(deck)
    } else {
      let currentDeck = deck
      let filteredDeck = currentDeck.filter(card => card.side === stack)
      setSorted(filteredDeck)
    }
  }

  const value = {
    deck,
    sortedDeck,
    filter,
    addCard,
    updateCard,
    removeCard,
    filterDeck,
  }

  return (
    <DeckContext.Provider value={value}>
      {children}
    </DeckContext.Provider>
  )
}

export function useDeck() {
  return useContext(DeckContext);
}