import empire from "../resources/imgs/unitTypes/unit-type-empire.png"
import rebel from "../resources/imgs/unitTypes/unit-type-rebel.png"
import seperatist from "../resources/imgs/unitTypes/unit-type-seperatis.png"
import republic from "../resources/imgs/unitTypes/unit-type-republic.png"

const CardFaction = ({faction}) => {

    switch (faction){
        case "empire" : return (
            <img className="mall" src={empire} alt="card-type" />
        )
        case "rebel" : return (
            <img className="mall" src={rebel} alt="card-type" />
        )
        case "seperatist" : return (
            <img className="mall" src={seperatist} alt="card-type" />
        )
        case "republic" : return (
            <img className="mall" src={republic} alt="card-type" />
        )
    }
}

export default CardFaction