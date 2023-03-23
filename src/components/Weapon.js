import { useEffect } from "react"
import "./Weapon.css"
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
const createDice = (color) => {
    return { "color": color }
}

const Weapon = ({ weapon }) => {

    const dices = []

    useEffect(()=>{
        console.log("Weapon: ", weapon)
        if(weapon != undefined) setupDices()
    }, [])

    const setupDices = () => {
        console.log("setting up attack dices for weapon:", weapon.title)
        if (weapon.white != null || 0) {
            console.log("number of white: ", weapon.white)
            for (let i = 1; i <= weapon.white; i++) {
                dices.push(createDice("white"))
            }
        }
        if (weapon.red != null || 0) {
            console.log("number of red: ", weapon.red)
            for (let i = 1; i <= weapon.red; i++) {
                dices.push(createDice("red"))
            }
        }
        if (weapon.black != null || 0) {
            console.log("number of black: ", weapon.black)
            for (let i = 1; i <= weapon.black; i++) {
                dices.push(createDice("black"))
            }
        }

        console.log("Attack pool for weapon: ", dices)
    }

    return (
        <div className="weapon">

        </div>
    )
    /*
    return (
        {
            attackDices.map((dice, index) => (
                <div className="attack-dice" key={index}>
                </div>
            ))
        }
    )
    */
}

export default Weapon