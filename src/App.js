import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';
import CardBuilder from './CardBuilder';
import defaultCard from "./defaultCard.json"
import darthvader from "./resources/defaulcards/darthvader.json"
import emptyCard from "./emptyCard.json"
import A4 from './A4';

function App() {

  const [card, setCard] = useState(darthvader)
  const [empty, setEmpty] = useState(true)

  useEffect(()=> {
    console.log("CARD UPDATED")
  }, [card])

  const updateCard = (newCard) => {
    setCard(newCard)
  }


  return (
    <div className="App">
      <A4 />
    </div>
  )

/*
return (
    <div className="App">
      <div className='container'>
      <Card card={card} empty={empty} />
      <button className='noprint' onClick={()=>setCard(emptyCard)}> Rensa kort </button>
      <button className='noprint' onClick={()=>setEmpty(!empty)}> ändra kort </button>
      <CardBuilder card={card} updateCard={updateCard} />
      </div>
    </div>
  );

  */
}

export default App;
