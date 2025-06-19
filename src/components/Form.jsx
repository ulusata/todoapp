import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

function Form(props) {
  const [textInput, setInput] = useState({
    title: "",
    content: "",
  });

  const [isVisible, setVisible] = useState(false);

  function handleInput(e) {
    const { value, name } = e.target;

    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          props.saveItem(textInput);
          e.preventDefault();

          setInput({
            title: "",
            content: "",
          });
        }}
      >
        {isVisible && (
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleInput}
            value={textInput.title}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isVisible ? 3 : 1}
          onChange={handleInput}
          onClick={() => setVisible(true)}
          value={textInput.content}
        />
        <Zoom in={isVisible}>
          <button type="submit">
            <AddIcon></AddIcon>
          </button>
        </Zoom>
      </form>
    </div>
  );
}

export default Form;
