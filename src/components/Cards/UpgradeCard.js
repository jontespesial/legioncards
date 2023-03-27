const UpgradeCard = ({ card }) => {
    
    if(card) {
        <div className="card-upgrade-placeholder" >
            Card not implemented yet
        </div>
    }
    else
    {
        return (
            <div className="card-upgrade placeholder noprint" >
                <select>
                    <option disabled>Select upgrade</option>
                    <option value={"type1"}>type1</option>
                    <option value={"type2"}>type2</option>
                    <option value={"type3"}>type3</option>
                    <option value={"test"}>test</option>
                </select>
            </div>
        )
    }
}

export default UpgradeCard