import Card from "../Card"
import UnitCard from "./Cards/UnitCard"
import UpgradeCard from "./Cards/UpgradeCard"

const A4Row = ({ type, cards, addNewCard }) => {

    switch (type) {
        case "unit": {
            return (
                <div className="a4-row">
                    <UnitCard card={cards[0]} addNewCard={(newCard)=>addNewCard(newCard, 0)} />
                    <UnitCard card={cards[1]} />
                </div>
            )
        }
        case "upgrade": {
            return (
                <div className="a4-row">
                    <UpgradeCard card={cards[0]} />
                    <UpgradeCard card={cards[1]} />
                    <UpgradeCard card={cards[2]} />
                </div>
            )
        }
    }
}

export default A4Row