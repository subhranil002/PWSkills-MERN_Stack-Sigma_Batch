import React, { useContext, useState } from "react";
import ToDoDispatchContext from "../../context/ToDoDispatchContext";

function AddToDo() {
    const [inputText, setInputText] = useState("");
    const { dispatch } = useContext(ToDoDispatchContext);

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
                    dispatch({
                        type: "add_todo",
                        payload: { todoText: inputText },
                    });
                    setInputText("");
                }}
            >
                Add
            </button>
        </div>
    );
}

export default AddToDo;
