import React from "react";
import Zoom from "@mui/material/Zoom";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  return (
    <Zoom in={true}>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button
          onClick={() => {
            props.deleteItem(props.id);
          }}
        >
          <DeleteIcon></DeleteIcon>
        </button>
      </div>
    </Zoom>
  );
}

export default Note;
