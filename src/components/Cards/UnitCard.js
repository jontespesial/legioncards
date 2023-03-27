import React from "react"

import "../../Card.css"
import UpgradeSlot from "../UpgradeSlot"
import Weapon from "../Weapon"
import "../../Dice.css"
import empire from "../../resources/mall_empire.png"
import mall from "../../resources/mall.png"
import movement from "../../resources/movement.png"
import surgeAttack from "../../resources/surge_attack.png"
import surgeDefence from "../../resources/surge_defence.png"
import weaponsbg1 from "../../resources/imgs/weapons1.png"
import weaponsbg2 from "../../resources/imgs/weapons2.png"
import weaponsbg3 from "../../resources/imgs/weapons3.png"
import defaultUnitImage from "../../resources/imgs/unitImages/unit_image_mall_318x250.png"
import iden from "../../resources/imgs/unitImages/iden.png"
import UnitType from "../../UnitType"
import CardFaction from "../CardFaction"
import { CreateCard } from "./CardFactory"

const UnitCard = ({ card, addNewCard }) => {

    if (card) {
        return (
            <div className="card-unit">
                {/* --- Unit image ---*/}
                <img className="unitimage" src={iden} alt={defaultUnitImage} />
                {/* --- Card image ---*/}
                <img src={mall} className="mall" />
                {/* --- Card-type image ---*/}
                <CardFaction faction={card.faction} />
                {/* --- Unit name, type and count ---*/}
                <p className={card.unique ? "title font-title unique" : "title font-title"}>{card.title}</p>
                <UnitType type={card.unitType} />
                <p className="unitcount">{card.unitCount}</p>

                {/* --- Upgrades ---*/}
                <div className="upgrades">
                    {card.upgrades.map((upgrade, index) => (
                        <UpgradeSlot type={upgrade.type} />
                    ))}
                </div>
                <div className="keywords">
                    {card.keywords.map((keyword, index) => (
                        <div className={"keyword" + (index == 0 ? " first" : "")} key={index}>
                            <p className="keyword-title font-title">{keyword.title} {keyword.level}</p>
                            <p className="keyword-description font-description">{keyword.description}</p>
                        </div>
                    ))}
                </div>
                <div className={"dice defence " + card.defenceType}></div>
                {card.hp != null && <div className="icon small health"><p className="hpstats health-points font-title">{card.hp}</p></div>}
                {(card.courage.amount != null && card.courage.amount > 0) && <div className={"icon small " + card.courage.type}><p className={"hpstats font-title " + card.courage.type + "-points"}>{card.courage.amount}</p></div>}
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


                <div className="weaponsarea">
                    {
                        card.weapons.map((weapon, index) => (
                            <Weapon key={index} weapon={weapon} numberOfWeapons={card.weapons.length} />
                        ))
                    }
                    {(card.weapons.length == 1) && <img className="weaponsarea-image" src={weaponsbg1} alt="WeaponBackground_1" />}
                    {(card.weapons.length == 2) && <img className="weaponsarea-image" src={weaponsbg2} alt="WeaponBackground_2" />}
                    {(card.weapons.length == 3) && <img className="weaponsarea-image" src={weaponsbg3} alt="WeaponBackground_3" />}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="card-unit placeholder noprint">
                <select onChange={(e)=> addNewCard(CreateCard(e.target.value))}>
                    <option disabled selected>Select a faction</option>
                    <option value={"empire"}>Empire</option>
                    <option value={"rebels"}>Rebels</option>
                    <option value={"galacticrepublic"}>Galactic republic</option>
                    <option value={"test"}>test</option>
                </select>
            </div>
        )
    }
}

export default UnitCard