import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNotes(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }
  function deleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <CreateArea addNotes={addNotes} />

        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            deleteNote={deleteNote}
            title={note.title}
            content={note.content}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
