import empire from "../resources/imgs/unitTypes/unit-type-empire.png"

const CardFaction = ({faction}) => {

    switch (faction){
        case "empire" : return (
            <img className="mall" src={empire} alt="card-type" />
        )
    }
}

export default CardFaction