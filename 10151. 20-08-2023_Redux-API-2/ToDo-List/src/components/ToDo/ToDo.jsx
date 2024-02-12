import React, { useState } from "react";

function ToDo({ todoData, isFinished, changeFinished, onEdit, onDelete }) {
    const [finished, setFinished] = useState(isFinished);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todoData);

    return (
        <div>
            <input
                type="checkbox"
                checked={finished}
                onChange={(e) => {
                    setFinished(e.target.checked);
                    changeFinished(e.target.checked);
                }}
            />
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />
            ) : (
                todoData
            )}
            <button
                onClick={() => {
                    setIsEditing(!isEditing);
                    onEdit(editText);
                }}
            >
                {!isEditing ? "Edit" : "Save"}
            </button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default ToDo;
