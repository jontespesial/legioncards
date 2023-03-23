import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';
import CardBuilder from './CardBuilder';
import defaultCard from "./defaultCard.json"
import emptyCard from "./emptyCard.json"

function App() {

  const [card, setCard] = useState(defaultCard)

  useEffect(()=> {
    console.log("CARD UPDATED")
    console.log("dices - white:" + card.weapons[0].white + " red: " + card.weapons[0].red + " black: "+ card.weapons[0].black)
  }, [card])

  const updateCard = (newCard) => {
    console.log("TRIGGERING CARDUPDATE")
    console.log("NYA: " + newCard.title)
    console.log("GAMMLA: " + card.title)
    setCard(newCard)
  }

  return (
    <div className="App">
      <div className='container'>
      <Card card={card} />
      <button onClick={()=>setCard(emptyCard)}> Rensa kort </button>
      <CardBuilder card={card} updateCard={updateCard} />
      </div>
    </div>
  );
}

export default App;
