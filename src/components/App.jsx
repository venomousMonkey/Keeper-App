import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header></Header>
      <Footer></Footer>
      {notes.map( notes => {
        return (
          <Note
            key={notes.key}
            title={notes.title}
            content={notes.content}
          ></Note>
        );
      })}
    </div>
  );
}

export default App;
