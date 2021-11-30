import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { CardType } from '../types/index'
import { getData } from '../utils/apiCalls'

type deckContextType = {
  deck: CardType[];
  addCard: (card: CardType) => void;
};

const deckContextDefaultValues: deckContextType = {
  deck: [],
  addCard: (card) => {},
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
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDeck()
  }, [])

  const addCard = (card: CardType) => {
    console.log('HEYYYYYYYYYYY', card)
    // setDeck()
  };

  const value = {
    deck,
    addCard,
  };

  return (
    <>
      <DeckContext.Provider value={value}>
        {children}
      </DeckContext.Provider>
    </>
  );
}