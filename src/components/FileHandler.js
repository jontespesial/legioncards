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
export const HandleDropFile = async (e, setDragState, handleDropFile) => {
    e.preventDefault();
    e.stopPropagation();
    setDragState(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        console.log("dropped filetype: ", e.dataTransfer.files[0].type)
        switch (e.dataTransfer.files[0].type) {
            case "application/json": {
                handleDropFile(e.dataTransfer.files[0])
                break;
            }
            case "image/png": {
                handleDropFile(e.dataTransfer.files[0])
                break;
            }
        }
        handleDropFile(e.dataTransfer.files[0])
    }
}


// triggers when file of json is dropped
export const HandleDropJson = async (e, setDragState, handleDropJson) => {
    e.preventDefault();
    e.stopPropagation();
    setDragState(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        console.log("dropped file: ", e.dataTransfer.files[0].type)
        if (e.dataTransfer.files[0].type === "application/json") {
            console.log("file was JSON")
            const card = await ReadJson(e.dataTransfer.files[0])
            handleDropJson(card)
        }
    }
}

export const ReadJson = async (file) => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onload = (event) => {
            const card = JSON.parse(event.target.result);
            console.log("card read: ", card);
            resolve(card);
        }
        reader.onerror = (error) => {
            console.error('Error reading file', error);
            reject(error);
        };
        reader.readAsText(file, "UTF-8");
    });
};

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
/**/