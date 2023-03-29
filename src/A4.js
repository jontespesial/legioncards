import { useEffect, useState } from "react"
import "./A4.css"
import Card from "./Card"
import A4Row from "./components/A4Row"
import Row from "./components/A4Row"
import emptyCard from "./emptyCard.json"
import darthvader from "./resources/defaulcards/darthvader.json"
import { CreateA4, CreateRow } from "./components/Cards/CardFactory"

const A4 = ({ }) => {

    const [card, setCard] = useState(darthvader)
    const [rows, setRows] = useState(CreateA4())

    useEffect(() => {
        console.log("CARD UPDATED")
    }, [card])

    const updateCard = (newCard, rowIndex, cardIndex) => {
        console.log("UPDATING A4 Card: ", newCard)
        const updateRow = (rowIndex) => (prevState) => {
            const newRow = { ...prevState[`row${rowIndex}`], cards: [...prevState[`row${rowIndex}`].cards] };
            newRow.cards[cardIndex] = newCard;
            return { ...prevState, [`row${rowIndex}`]: newRow };
        }

        setRows(prevState => {
            switch (rowIndex) {
                case 0: return updateRow(1)(prevState);
                case 1: return updateRow(2)(prevState);
                case 2: return updateRow(3)(prevState);
                default: return prevState;
            }
        });
    }

    const setRowType = (rowIndex, type) => {
        const updateRow = (rowIndex) => (prevState) => {
            const newRow = CreateRow(type)
            return { ...prevState, [`row${rowIndex}`]: newRow };
        }

        setRows(prevState => {
            switch (rowIndex) {
                case 0: return updateRow(1)(prevState);
                case 1: return updateRow(2)(prevState);
                case 2: return updateRow(3)(prevState);
                default: return prevState;
            }
        });
    }

    return (
        <div className="a4">
            <A4Row cards={rows.row1.cards} type={"unit"} updateCard={(newCard, cardIndex)=>updateCard(newCard, 0, cardIndex)} />
            <A4Row cards={rows.row2.cards} type={"upgrade"} updateCard={(newCard, cardIndex)=>updateCard(newCard, 1, cardIndex)} />
            <A4Row cards={rows.row3.cards} type={"unit"} updateCard={(newCard, cardIndex)=>updateCard(newCard, 2, cardIndex)} />
        </div>
    )
}

export default A4