import React, { useState } from "react";

function AddToDo({ addTodo }) {
    const [inputText, setInputText] = useState("");

    return (
        <div>
            <input
                type="text"
                placeholder="Add your next todo"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button
                onClick={() => {
                    addTodo(inputText);
                    setInputText("");
                }}
            >
                Add
            </button>
        </div>
    );
}

export default AddToDo;
