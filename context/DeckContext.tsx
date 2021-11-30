import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { CardType } from '../types/index'
import { getData } from '../utils/apiCalls'

type deckContextType = {
  deck: CardType[];
  addCard: (card: CardType) => void;
  removeCard: (card: CardType) => void;
};

const deckContextDefaultValues: deckContextType = {
  deck: [],
  addCard: (card) => {},
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
      let fetched = await getData()
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

  const removeCard = (card: CardType) => {
    let ind = deck.findIndex(currentCard => currentCard.id === card.id)
    let currentDeck = deck
    currentDeck.splice(ind, 1)
    setDeck([...currentDeck])
  };

  const value = {
    deck,
    addCard,
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