import Card from "../Card"
import UnitCard from "./Cards/UnitCard"
import UpgradeCard from "./Cards/UpgradeCard"

const A4Row = ({ type, cards, updateCard }) => {

    switch (type) {
        case "unit": {
            return (
                <div className="a4-row">
                    <UnitCard card={cards[0]} updateCard={(newCard)=>updateCard(newCard, 0)} />
                    <UnitCard card={cards[1]} updateCard={(newCard)=>updateCard(newCard, 1)} />
                </div>
            )
        }
        case "upgrade": {
            return (
                <div className="a4-row">
                    <UpgradeCard card={cards[0]} updateCard={(newCard)=>updateCard(newCard, 0)} />
                    <UpgradeCard card={cards[1]} updateCard={(newCard)=>updateCard(newCard, 1)} />
                    <UpgradeCard card={cards[2]} updateCard={(newCard)=>updateCard(newCard, 2)} />
                </div>
            )
        }
    }
}

export default A4Row