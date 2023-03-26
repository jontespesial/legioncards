import "./A4.css"
import Card from "./Card"
import emptyCard from "./emptyCard.json"
import darthvader from "./resources/defaulcards/darthvader.json"

/*
    "rows" : [
        {
            "type": units
            "cards": [
                {
                    cardobjects
                },
                {
                    cardobjects
                }
            ]
        },
        {
            "type": upgrades
            "cards": [
                {
                    cardobjects
                },
                {
                    cardobjects
                },
                {
                    cardobjects
                }
            ]
        },
        {
            "type": units
        }
    ]
*/

const A4 = ({ rows }) => {

    return (
        <div className="a4">
            <div className="a4-row row-1">
                <div className="card-unit-demo" />
                <div className="card-unit-demo" />
            </div>
            <div className="a4-row row-2">
                <div className="card-upgrade-demo" />
                <div className="card-upgrade-demo" />
                <div className="card-upgrade-demo" />
            </div>
            <div className="a4-row row-3">
                <Card card={darthvader} empty={true} />
                <Card card={emptyCard} empty={true} />
            </div>
        </div>
    )
}

export default A4