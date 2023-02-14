import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [inputText, setInputText] = useState({ title: "", content: "" });
  function update(event) {
    props.addNotes(inputText);
    setInputText({ title: "", content: "" });
    event.preventDefault();
  }
  function change(event) {
    const { name, value } = event.target;
    setInputText((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  return (
    <div>
      <form onSubmit={update} className="create-note">
        <input
          name="title"
          placeholder="Title"
          onChange={change}
          value={inputText.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={change}
          value={inputText.content}
        />
         
        <Zoom in={true}>
            <Fab type="submit" aria-label="add"><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
