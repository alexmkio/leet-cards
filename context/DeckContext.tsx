import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { CardType, PutObject } from '../types/index'
import { getData } from '../utils/apiCalls'

type deckContextType = {
  deck: CardType[];
  addCard: (card: CardType) => void;
  updateCard: (id: Number | undefined, putObject: PutObject) => void;
  removeCard: (card: CardType) => void;
};

const deckContextDefaultValues: deckContextType = {
  deck: [],
  addCard: (card) => {},
  updateCard: (id, putObject) => {},
  removeCard: (card) => {},
};

const DeckContext = createContext<deckContextType>(deckContextDefaultValues);

export function useDeck() {
  return useContext(DeckContext);
}

type Props = {
  children: ReactNode;
};

export function DeckProvider({ children }: Props) {
  const [deck, setDeck] = useState<CardType[]>([]);

  const fetchDeck = async () => {
    try {
      let fetched = await getData('cards')
      setDeck(fetched)
    } catch (error) {
      //shore this up
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDeck()
  }, [])

  const addCard = (card: CardType) => {
    setDeck([...deck, card])
  };

  const updateCard = (id: Number | undefined, putObject: PutObject) => {
    let ind = deck.findIndex(card => card.id === id)
    let currentDeck = deck
    currentDeck[ind].answer = putObject.answer
    setDeck([...currentDeck])
  };

  const removeCard = (card: CardType) => {
    let ind = deck.findIndex(currentCard => currentCard.id === card.id)
    let currentDeck = deck
    currentDeck.splice(ind, 1)
    setDeck([...currentDeck])
  };

  const value = {
    deck,
    addCard,
    updateCard,
    removeCard,
  };

  return (
    <>
      <DeckContext.Provider value={value}>
        {children}
      </DeckContext.Provider>
    </>
  );
}