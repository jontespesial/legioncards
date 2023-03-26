import { useEffect, useState } from "react"
import range0 from "../resources/imgs/range_0.png"
import range1 from "../resources/imgs/range_1.png"
import range2 from "../resources/imgs/range_2.png"
import range3 from "../resources/imgs/range_3.png"
import range4 from "../resources/imgs/range_4.png"
import range5 from "../resources/imgs/range_5.png"

const WeaponRange = ({ range }) => {
    switch (parseInt(range)) {
        case 1:
            return (
                <img className="weaponrange" src={range1} alt="range_1" />
            )
        case 2:
            return (
                <img className="weaponrange" src={range2} alt="range_2" />
            )
        case 3:
            return (
                <img className="weaponrange" src={range3} alt="range_3" />
            )
        case 4:
            return (
                <img className="weaponrange" src={range4} alt="range_4" />
            )
        case 5:
            return (
                <img className="weaponrange" src={range5} alt="range_5" />
            )
        default:
            return (
                <img className="weaponrange" src={range0} alt="range_0" />
            )
    }
}

export default WeaponRange