import { useEffect, useState } from "react"
import "./Weapon.css"
import white from "../resources/dice_attack_white.png"
import red from "../resources/dice_attack_red.png"
import black from "../resources/dice_attack_black.png"
import WeaponRange from "./WeaponRange"
import spacer from "../resources/imgs/range_spacer.png"

const createDice = (color, index) => {
    const position = ((index % 2 === 0) ? "up" : "down")
    return { "color": color, "pos": position }
}

const Weapon = ({ weapon }) => {

    const [dicesState, setDices] = useState([])

    let dices = []

    useEffect(() => {
        console.log("Weapon: ", weapon)
        if (weapon != undefined) setupDices()
    }, [weapon])

    const setupDices = () => {
        dices = []
        if (weapon.white != null || 0) {
            console.log("number of white: ", weapon.white)
            for (let i = 1; i <= weapon.white; i++) {
                dices.push(createDice("white", dices.length))
            }
        }
        if (weapon.red != null || 0) {
            console.log("number of red: ", weapon.red)
            for (let i = 1; i <= weapon.red; i++) {
                dices.push(createDice("red", dices.length))
            }
        }
        if (weapon.black != null || 0) {
            console.log("number of black: ", weapon.black)
            for (let i = 1; i <= weapon.black; i++) {
                dices.push(createDice("black", dices.length))
            }
        }

        console.log("Attack pool for weapon: ", dices)
        setDices(dices)
    }

    return (
        <div className="weapon w2">
            <div className="textarea">
                <p className="font-title white">{weapon.title}</p>
            </div>
            <div className="contentarea">
                <div className="rangearea">
                    {
                        ((weapon.range.from > 0 ) && (weapon.range.to > 0 ))
                            ? (
                                <>
                                    <WeaponRange range={weapon.range.from} />
                                    <img className="weaponrangespacer" src={spacer} alt="spacer" />
                                    <WeaponRange range={weapon.range.to} />
                                </>
                            )
                            : (weapon.range.from != null) && <WeaponRange range={weapon.range.from} />
                    }
                </div>
                <div className="dicearea">
                    {dicesState.map((dice, index) => (
                        <>
                            {dice.color === "white" && <img src={white} className={"weapon-dice " + (dice.pos)}></img>}
                            {dice.color === "red" && <img src={red} className={"weapon-dice " + (dice.pos)}></img>}
                            {dice.color === "black" && <img src={black} className={"weapon-dice " + (dice.pos)}></img>}
                        </>
                    ))}
                </div>
            </div>
            <div className="keywordarea">
                {
                    (weapon.keaywords != undefined) && weapon.keywords.map((keyword, index)=>(
                        <p className="font-title">{keyword.title + ((keyword.level != null) ?  " " + keyword.level : "") + ((index + 1 < (weapon.keywords.length)) ? ", " : "")}</p>
                    ))
                }
            </div>
        </div>
    )
}
export default Weapon