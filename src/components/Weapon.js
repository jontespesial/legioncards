import { useEffect, useState } from "react"
import "./Weapon.css"
import white from "../resources/dice_attack_white.png"
import red from "../resources/dice_attack_red.png"
import black from "../resources/dice_attack_black.png"

/*
{
"title": "Test blaster",
            "range": {
                "from": 1,
                "to": 3
            },
            "white": 2,
            "red": 2,
            "black": 1
}
*/
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
        console.log("setting up attack dices for weapon:", weapon.title)
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
        {dicesState.map((dice, index) => (
                <>
                    {dice.color === "white" && <img src={white} className={"weapon-dice " + (dice.pos)}></img>}
                    {dice.color === "red" && <img src={red} className={"weapon-dice " + (dice.pos)}></img>}
                    {dice.color === "black" && <img src={black} className={"weapon-dice " + (dice.pos)}></img>}
                </>
            ))}
        </div>
    )
}
export default Weapon