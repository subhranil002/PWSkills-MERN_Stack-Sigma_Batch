import React, { useContext } from "react";
import ToDo from "../ToDo/ToDo";
import ToDoContext from "../../context/ToDoContext";
import ToDoDispatchContext from "../../context/ToDoDispatchContext";

function ToDoList() {
    const { list, setList } = useContext(ToDoContext);
    const { dispatch } = useContext(ToDoDispatchContext);

    return (
        <div>
            {list.length > 0 &&
                list.map((todo) => (
                    <ToDo
                        key={todo.id}
                        id={todo.id}
                        todoData={todo.todoData}
                        isFinished={todo.finished}
                        changeFinished={(isFinished) => {
                            dispatch({
                                type: "finish_todo",
                                payload: { todo, isFinished },
                            });
                        }}
                        onDelete={() => {
                            dispatch({
                                type: "delete_todo",
                                payload: { todo },
                            });
                        }}
                        onEdit={(todoText) => {
                            dispatch({
                                type: "edit_todo",
                                payload: { todo, todoText },
                            });
                        }}
                    />
                ))}
        </div>
    );
}

export default ToDoList;
