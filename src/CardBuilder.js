import React from "react"
import "./CardBuilder.css"
import ToggleSwitch from "./components/ToggleSwitch";
import UpgradeSlot from "./components/UpgradeSlot";

const CardBuilder = ({ card, updateCard }) => {

    const updateCardTitle = (input) => {
        const newCard = { ...card, title: input };
        updateCard(newCard);
    }

    const updateKeywordTitle = (input, index) => {
        const updatedKeywords = [...card.keywords]
        updatedKeywords[index] = { ...updatedKeywords[index], title: input }
        const updatedCard = { ...card, keywords: updatedKeywords }
        updateCard(updatedCard);
    }

    const updateKeywordDescription = (input, index) => {

        const updatedCard = { ...card, keywords: card.keywords.map((keyword, i) => i === index ? { ...keyword, description: input } : keyword) };
        updateCard(updatedCard);
    }

    const updateKeywordLevel = (input, index) => {
        const updatedCard = { ...card, keywords: card.keywords.map((keyword, i) => i === index ? { ...keyword, level: input } : keyword) };
        updateCard(updatedCard);
    }

    const updateUpgradeType = (input, index) => {
        const updatedCard = { ...card, upgrades: card.upgrades.map((upgrade, i) => i === index ? { ...upgrade, type: input } : upgrade) };
        updateCard(updatedCard);
    }

    const updateHealth = (input, index) => {
        const newCard = { ...card, hp: input };
        updateCard(newCard);
    }

    const updateMovement = (input, index) => {
        const newCard = { ...card, speed: input };
        updateCard(newCard);
    }

    const updateDefenceDice = (input) => {
        const newCard = { ...card, defenceType: input };
        updateCard(newCard);
    }

    const addKeyword = () => {
        const updatedKeywords = [...card.keywords]
        updatedKeywords.push({ "title": "", "description": "", "level": null })
        const updatedCard = { ...card, keywords: updatedKeywords }
        updateCard(updatedCard);
    }

    const addUpgrade = () => {
        const updatedUpgrades = [...card.upgrades]
        updatedUpgrades.push({ "type": null, })
        const updatedCard = { ...card, upgrades: updatedUpgrades }
        updateCard(updatedCard);
    }

    const removeKeyword = (index) => {
        const updatedKeywords = [...card.keywords]
        updatedKeywords.splice(index, 1)
        const updatedCard = { ...card, keywords: updatedKeywords }
        updateCard(updatedCard);
    }

    const removeUpgrade = (index) => {
        const updatedUpgrades = [...card.upgrades]
        updatedUpgrades.splice(index, 1)
        const updatedCard = { ...card, upgrades: updatedUpgrades }
        updateCard(updatedCard);
    }

    return (
        <div className="cardbuilder-container">
            <div className="row">
                <label >Namn: </label>
                <input id="card-title" type="text" className="form" value={card.title} onChange={(e) => updateCardTitle(e.target.value)} />
                <ToggleSwitch value={card.unique} setValue={(state) => updateCard({ ...card, unique: state })} />
            </div>

            <div className="row">
                <label>Unit type: </label>
                <select className="form" type="number" onChange={(e) => updateCard({ ...card, unitType: e.target.value })} >
                    <option selected={card.unitType == null}></option>
                    <option value={"commander"} selected={card.unitType == "commander"}>Commander</option>
                    <option value={"operative"} selected={card.unitType == "operative"}>Operative</option>
                    <option value={"trooper"} selected={card.unitType == "trooper"}>Trooper</option>
                </select>
                <label>Count: </label>
                <input type="number" min="1" max="9" className="form number" value={card.unitCount} onChange={(e) => updateCard({ ...card, unitCount: e.target.value })} />
            </div>

            <div className="row">
                <label >Keywords: </label>
                <button id="add-keyword" className="form add" onClick={addKeyword} >+</button>
            </div>

            <div className="row">
                <div className="builder-keywords">
                    {
                        card.keywords.map((keyword, index) => (
                            <div className="builder-keyword" key={index}>
                                <label>Titel: </label>
                                <input className="form title" type="text" value={keyword.title} onChange={(e) => updateKeywordTitle(e.target.value, index)} />
                                <select type="number" onChange={(e) => updateKeywordLevel(e.target.value, index)} >
                                    <option selected={keyword.level == null}></option>
                                    <option selected={keyword.level == 1}>1</option>
                                    <option selected={keyword.level == 2}>2</option>
                                    <option selected={keyword.level == 3}>3</option>
                                    <option selected={keyword.level == 4}>4</option>
                                    <option selected={keyword.level == 5}>5</option>
                                </select>
                                <label>Beskrivning: </label>
                                <input className="form description" type="text" value={keyword.description} onChange={(e) => updateKeywordDescription(e.target.value, index)} />
                                <button className="form remove" onClick={() => removeKeyword(index)}>-</button>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="row">
                <label>Health: </label>
                <input type="number" min="1" max="9" className="form number" value={card.hp} onChange={(e) => updateHealth(e.target.value)} />
                <label>Courage: </label>
                <input type="number" min="1" max="9" className="form number" value={card.courage} onChange={(e) => updateCard({ ...card, courage: e.target.value })} />
            </div>

            <div className="row">
                <label>Defence dice: </label>
                <select type="number" onChange={(e) => updateDefenceDice(e.target.value)}>
                    <option selected={card.defenceType == null}></option>
                    <option className="" value={"white"} selected={card.defenceType == "white"}>White</option>
                    <option className="" value={"red"} selected={card.defenceType == "red"}>Red</option>
                </select>
            </div>

            <div className="row">
                <label>Attack surge: </label>
                <ToggleSwitch value={card.surgeAttack} setValue={(state) => updateCard({ ...card, surgeAttack: state })} />
            </div>

            <div className="row">
                <label>Defence surge: </label>
                <ToggleSwitch value={card.surgeDefence} setValue={(state) => updateCard({ ...card, surgeDefence: state })} />
            </div>

            <div className="row">
                <label>Movementspeed: </label>
                <input type="number" min="1" max="3" className="form number" value={card.speed} onChange={(e) => updateMovement(e.target.value)} />
            </div>

            <div className="row">
                <label>Attack dice: </label>
                <div className="form attackdice">
                    <label>White: </label>
                    <input type="number" className="form number" />
                    <label>Red: </label>
                    <input type="number" className="form number" />
                    <label>Black: </label>
                    <input type="number" className="form number" />
                </div>
            </div>

            <div className="row">
                <label >Upgrades: </label>
                <button id="add-keyword" className="form add" onClick={addUpgrade} >+</button>
            </div>
            <div className="row">
                <div className="builder-upgrades">
                    {
                        card.upgrades.map((upgrade, index) => (
                            <div className="builder-upgrades" key={index}>
                                <select className="upgrade icon large black" type="number" onChange={(e) => updateUpgradeType(e.target.value, index)} >
                                    <optgroup className="upgrade icon large black ">
                                        <option selected={upgrade.type == null}></option>
                                        <option value={"armament"} selected={upgrade.type == "armament"}>{"\u0042"}</option>
                                        <option value={"command"} selected={upgrade.type == "command"}>{"\u0043"}</option>
                                        <option value={"comms"} selected={upgrade.type == "comms"}>{"\u004f"}</option>
                                        <option value={"crew"} selected={upgrade.type == "crew"}>{"\u0041"}</option>
                                        <option value={"force"} selected={upgrade.type == "force"}>{"\u0046"}</option>
                                        <option value={"xxxgear"} selected={upgrade.type == "gear"}>{"\u0047"}</option>
                                        <option value={"generator"} selected={upgrade.type == "generator"}>{"\u0049"}</option>
                                        <option value={"grenades"} selected={upgrade.type == "grenades"}>{"\u004E"}</option>
                                        <option value={"hardpoint"} selected={upgrade.type == "hardpoint"}>{"\u0048"}</option>
                                        <option value={"heavyweapon"} selected={upgrade.type == "heavyweapon"}>{"\u0057"}</option>
                                        <option value={"ordnance"} selected={upgrade.type == "ordnance"}>{"\u004f"}</option>
                                        <option value={"personnel"} selected={upgrade.type == "personnel"}>{"\u0055"}</option>
                                        <option value={"pilot"} selected={upgrade.type == "pilot"}>{"\u0050"}</option>
                                        <option value={"protocol"} selected={upgrade.type == "protocol"}>{"\u004f"}</option>
                                        <option value={"training"} selected={upgrade.type == "training"}>{"\u004D"}</option>
                                    </optgroup>
                                </select>
                                <button className="form remove" onClick={() => removeUpgrade(index)}>-</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CardBuilder