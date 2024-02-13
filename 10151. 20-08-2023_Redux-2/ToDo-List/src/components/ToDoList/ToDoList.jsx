import ToDo from "../ToDo/ToDo";
import { useSelector } from "react-redux";

function ToDoList({ editTodo, deleteTodo, finishTodo }) {
    const list = useSelector((state) => state.todo);

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
                            finishTodo(todo, isFinished);
                        }}
                        onDelete={() => {
                            deleteTodo(todo);
                        }}
                        onEdit={(todoText) => {
                            editTodo(todo, todoText);
                        }}
                    />
                ))}
        </div>
    );
}

export default ToDoList;
