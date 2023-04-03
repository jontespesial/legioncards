const WeaponBuiler = () => {

    return (
        <>
            <div className="row">
                <label >Weapons: </label>
                <button className="form add" onClick={addWeapon} >+</button>
            </div>
            
            <div className="builder-weapons">
                {
                    card.weapons.map((weapon, index) => (
                        <>
                            <div className="row nm-b builder-weapon" key={index}>
                                <label className="small">Name: </label>
                                <input className="form title" type="text" value={weapon.title} onChange={(e) => updateWeaponTitle(e.target.value, index)} />
                                <label className="smallest">Range from: </label>
                                <select type="number" onChange={(e) => updateCard({ ...card, weapons: card.weapons.map((weapon, i) => i === index ? { ...weapon, range: { ...weapon.range, from: e.target.value } } : weapon) })} >
                                    <option selected={weapon.range.from == null}></option>
                                    <option selected={weapon.range.from == 0} value={0}>0</option>
                                    <option selected={weapon.range.from == 1} value={1}>1</option>
                                    <option selected={weapon.range.from == 2} value={2}>2</option>
                                    <option selected={weapon.range.from == 3} value={3}>3</option>
                                    <option selected={weapon.range.from == 4} value={4}>4</option>
                                    <option selected={weapon.range.from == 5} value={5}>5</option>
                                </select>
                                <label className="smallest">Range to: </label>
                                <select type="number" onChange={(e) => updateCard({ ...card, weapons: card.weapons.map((weapon, i) => i === index ? { ...weapon, range: { ...weapon.range, to: e.target.value } } : weapon) })} >
                                    <option selected={weapon.range.to == null}></option>
                                    <option selected={weapon.range.to == 0} value={0}>0</option>
                                    <option selected={weapon.range.to == 1} value={1}>1</option>
                                    <option selected={weapon.range.to == 2} value={2}>2</option>
                                    <option selected={weapon.range.to == 3} value={3}>3</option>
                                    <option selected={weapon.range.to == 4} value={4}>4</option>
                                    <option selected={weapon.range.to == 5} value={5}>5</option>
                                </select>
                                <div className="form attackdice">
                                    <label className="smallest">White: </label>
                                    <input type="number" className="form number" min="0" max="8" value={weapon.white} onChange={(e) => updateCard({ ...card, weapons: card.weapons.map((weapon, i) => i === index ? { ...weapon, white: e.target.value } : weapon) })} />
                                    <label className="smallest">Red: </label>
                                    <input type="number" className="form number" min="0" max="8" value={weapon.red} onChange={(e) => updateCard({ ...card, weapons: card.weapons.map((weapon, i) => i === index ? { ...weapon, red: e.target.value } : weapon) })} />
                                    <label className="smallest">Black: </label>
                                    <input type="number" className="form number" min="0" max="8" value={weapon.black} onChange={(e) => updateCard({ ...card, weapons: card.weapons.map((weapon, i) => i === index ? { ...weapon, black: e.target.value } : weapon) })} />
                                </div>
                                <button className="form remove" onClick={() => removeWeapon(index)}>-</button>

                            </div>
                            <div className="sub-row">
                                <label className="small">Keywords: </label>
                                <input className="form title" type="text" value={weapon.title} onChange={console.log("change")} />
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default WeaponBuiler