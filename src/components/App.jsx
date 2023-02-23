import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
//import notes from "../notes";
import CreateNote from "./CreateNote";

function App() {

const [notes, setNotes] = useState([])

function addNote(note){
  setNotes( prevNotes => {
    return [...prevNotes, note]
  })
}

function deleteNote(id){
  setNotes( prevNotes => {
    return prevNotes.filter((note, index) => {
      return index !== id;
    })
  })
}

console.log(notes)

  return (
    <div>
      <Header></Header>
      <Footer></Footer>
      <CreateNote onAdd={addNote}></CreateNote>
      {notes.map( (note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          ></Note>
        );
      })}
    </div>
  );
}

export default App;
