import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Note from "./components/Note";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  function saveItem(input) {
    setNotes((prev) => {
      return [...prev, input];
    });
  }

  function deleteItem(id) {
    setNotes((prev) => {
      return prev.filter((value, index) => index !== id);
    });
  }

  return (
    <div>
      <Header></Header>

      <Form saveItem={saveItem}></Form>

      {notes.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            deleteItem={deleteItem}
          ></Note>
        );
      })}

      <Footer></Footer>
    </div>
  );
}

export default App;
