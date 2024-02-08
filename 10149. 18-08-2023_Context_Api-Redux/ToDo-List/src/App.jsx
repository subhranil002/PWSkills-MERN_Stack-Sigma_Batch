import { useReducer, useState } from "react";
import AddToDo from "./components/AddToDo/AddToDo";
import ToDoList from "./components/ToDoList/ToDoList";
import ToDoContext from "./context/ToDoContext";
import todoReducer from "./reducers/todoReducer";
import ToDoDispatchContext from "./context/ToDoDispatchContext";

function App() {
    const [list, dispatch] = useReducer(todoReducer, []);

    return (
        <ToDoContext.Provider value={{ list }}>
            <ToDoDispatchContext.Provider value={{ dispatch }}>
                <AddToDo />
                <ToDoList />
            </ToDoDispatchContext.Provider>
        </ToDoContext.Provider>
    );
}

export default App;
