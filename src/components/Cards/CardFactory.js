export const CreateCard = (faction) => {
    return {
        "title": null,
        "unique": false,
        "faction": faction,
        "unitType": null,
        "unitCount": 1,
        "defenceType": null,
        "surgeAttack": false,
        "surgeDefence": false,
        "speed": 1,
        "hp": 1,
        "courage": {
            "type": "courage",
            "amount": 0
        },
        "upgrades": [],
        "keywords" : [],
        "weapons":[
        ]
    }
}

export const CreateRow = (type) => {
    if(type == "unit") {
        return {
            "type": "unit",
            "cards": []
        }
    }
    else if (type == "upgrade") {
        return {
            "type": "upgrade",
            "cards": []
        }
    }
}

export const CreateA4 = () => {
    /* Detta ska det vara när allt är implementerat
    return {
            "row1": null,
            "row2": null,
            "row3": null,
    }
    */
    return {
            "row1": CreateRow("unit"),
            "row2": CreateRow("upgrade"),
            "row3": CreateRow("unit"),
    }
}