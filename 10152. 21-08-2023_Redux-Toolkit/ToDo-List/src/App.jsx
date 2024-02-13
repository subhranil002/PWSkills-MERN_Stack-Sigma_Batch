import AddToDo from "./components/AddToDo/AddToDo";
import ToDoList from "./components/ToDoList/ToDoList";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import todoReducer, { addTodo, editTodo, deleteTodo, finishTodo } from "./slices/todoSlice"

function App() {
    const dispatch = useDispatch();
    const actions = bindActionCreators(
        {
            addTodo,
            editTodo,
            deleteTodo,
            finishTodo,
        },
        dispatch
    );

    return (
        <>
            <AddToDo addTodo={actions.addTodo} />
            <ToDoList
                editTodo={actions.editTodo}
                deleteTodo={actions.deleteTodo}
                finishTodo={actions.finishTodo}
            />
        </>
    );
}

export default App;
