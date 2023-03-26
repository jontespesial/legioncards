import { useEffect, useState } from "react"
import range0 from "../resources/imgs/range_0.png"
import range1 from "../resources/imgs/range_1.png"
import range2 from "../resources/imgs/range_2.png"
import range3 from "../resources/imgs/range_3.png"
import range4 from "../resources/imgs/range_4.png"
import range5 from "../resources/imgs/range_5.png"

const WeaponRange = ({ range, spacer }) => {
    switch (parseInt(range)) {
        case 1:
            return (
                <div className={(spacer) && "weaponrange-spacetoright-small"}>
                    <img className="weaponrange" src={range1} alt="range_1" />
                </div>
            )
        case 2:
            return (
                <div className={(spacer) && "weaponrange-spacetoright-small"}>
                    <img className="weaponrange" src={range2} alt="range_2" />
                </div>
            )
        case 3:
            return (
                <div className={(spacer) && "weaponrange-spacetoright-small"}>
                    <img className="weaponrange" src={range3} alt="range_3" />
                </div>
            )
        case 4:
            return (
                <div className={(spacer) && "weaponrange-spacetoright-small"}>
                    <img className="weaponrange" src={range4} alt="range_4" />
                </div>
            )
        case 5:
            return (
                <div className={(spacer) && "weaponrange-spacetoright-small"}>
                    <img className="weaponrange" src={range5} alt="range_5" />
                </div>
            )
        default:
            return (
                <div className={(spacer) && "weaponrange-spacetoright-big"}>
                    <img className="weaponrange" src={range0} alt="range_0" />
                </div>
            )
    }
}

export default WeaponRange