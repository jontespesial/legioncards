import { useRef, useState } from "react";
import { HandleDrag, HandleDropFile, HandleDropJson } from "../FileHandler";
import { CreateCard } from "./CardFactory"

const NewUnitCard = ({ addNewCard }) => {

  // drag state
  const [dragActive, setDragActive] = useState(false);
  // ref
  const inputRef = useRef(null);

  const test = (file) => {
    console.log(file)
  }

  return (
    <div className="card-unit placeholder noprint"
      onDragEnter={(e) => HandleDrag(e, setDragActive)}
      onSubmit={(e) => e.preventDefault()}>
      <select onChange={(e) => addNewCard(CreateCard(e.target.value))}>
        <option disabled selected>Select a faction</option>
        <option value={"empire"}>Empire</option>
        <option value={"rebel"}>Rebels alliance</option>
        <option value={"republic"}>Galactic republic</option>
        <option value={"seperatist"}>Seperatist alliance</option>
      </select>
      {dragActive && <div id="drag-file-element"
        onDragEnter={(e) => HandleDrag(e, setDragActive)}
        onDragLeave={(e) => HandleDrag(e, setDragActive)}
        onDragOver={(e) => HandleDrag(e, setDragActive)}
        onDrop={async (e) => HandleDropJson(e, setDragActive, addNewCard)}></div>}
    </div>
  )
  /*
  https://www.codemzy.com/blog/react-drag-drop-file-upload


  <input type="file" id="input-file-upload" multiple={true} />
    <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
      <div>
        <p>Drag and drop your file here or</p>
        <button className="upload-button">Upload a file</button>
      </div> 
    </label>
  */
}

export default NewUnitCard