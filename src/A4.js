import "./A4.css"
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
                <div className="card-unit-demo" />
                <div className="card-unit-demo" />
            </div>
        </div>
    )
}

export default A4