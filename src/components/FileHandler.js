 // handle drag events
 export const HandleDrag = function (e, setDragState) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
        console.log("Dragging")
        setDragState(true);
    } else if (e.type === "dragleave") {
        setDragState(false);
    }
}

// triggers when file is dropped
export const HandleDropFile = function (e, setDragState, handleDropFile) {
    e.preventDefault();
    e.stopPropagation();
    setDragState(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        console.log("dropped file: ", e.dataTransfer.files[0].type)
        handleDropFile(e.dataTransfer.files[0])
    }
}

// triggers when file of json is dropped
export const HandleDropJson = function (e, setDragState, handleDropJson) {
    e.preventDefault();
    e.stopPropagation();
    setDragState(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        console.log("dropped file: ", e.dataTransfer.files[0].type)
        if (e.dataTransfer.files[0].type === "application/json") {
            console.log("file was JSON")
            const fileReader = new FileReader();
            fileReader.readAsText(e.dataTransfer.files[0], "UTF-8");
            fileReader.onload = e => {
                const card = JSON.parse(e.target.result)
                console.log("card read: ", card);
                handleDropJson(card)
            };
        }
    }
}



/*
// triggers when file is selected with click
export const HandleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
        // handleFiles(e.target.files);
        console.log("change")
    }
}

// triggers the input when the button is clicked
export const OnButtonClick = () => {
    inputRef.current.click();
}
*/