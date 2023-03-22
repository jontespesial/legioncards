import React from "react"

import "./Card.css"
import "./Dice.css"
import empire from "./resources/mall_empire.png"
import movement from "./resources/movement.png"
import surgeAttack from "./resources/surge_attack.png"
import surgeDefence from "./resources/surge_defence.png"
import UnitType from "./UnitType"

const Card = ({ card }) => {

    return (
        <div className="card-unit">
            <text className="title">{card.title}</text>
            <UnitType type={card.unitType} />
            <p className="unitcount">{card.unitCount}</p>
            <div className="upgrades">
                {card.upgrades.map((upgrade, index) => (
                    <text className="upgrade icon large white" key={index}>{upgrade.icon}</text>
                ))}
            </div>
            <div className="keywords">
                {card.keywords.map((keyword, index) => (
                    <div className={"keyword" + (index == 0 ? " first" : "")} key={index}>
                        <text className="keyword-title">{keyword.title}</text>
                        <text className="keyword-description">{keyword.description}</text>
                    </div>
                ))}
            </div>
            <div className={"dice defence " + card.defenceType}></div>
            {card.hp != null && <div className="icon small health"><p className="hpstats health-points">{card.hp}</p></div>}
            {card.courage != null && <div className="icon small courage"><p className="hpstats courage-points">{card.courage}</p></div>}
            <div className="surges">
                {
                    card.surgeAttack && <img className="surge attack" src={surgeAttack} />
                }
                {
                    card.surgeDefence && <img className="surge defence" src={surgeDefence} />
                }
            </div>
            <div className="movementspeed">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                {
                    card.speed > 0 && <img className="speed 1" src={movement} />
                }
                {
                    card.speed > 1 && <img className="speed 2 " src={movement} />
                }
                {
                    card.speed > 2 && <img className="speed 3" src={movement} />
                }

            </div>
            <img src={empire} className="mall" />
        </div>
    )
}

export default Card