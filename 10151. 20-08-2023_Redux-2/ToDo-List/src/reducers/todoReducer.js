function todoReducer(state = [], action) {
    if (action.type == "add_todo") {
        const todoText = action.payload.todoText;
        return [
            ...state,
            {
                id: state.length + 1,
                todoData: todoText,
                finished: false,
            },
        ];
    } else if (action.type == "edit_todo") {
        const todo = action.payload.todo;
        const todoText = action.payload.todoText;
        const updateList = state.map((t) => {
            if (t.id == todo.id) {
                todo.todoData = todoText;
            }
            return t;
        });

        return updateList;
    } else if (action.type == "delete_todo") {
        const todo = action.payload.todo;
        const updateList = state.filter((t) => t.id != todo.id);

        return updateList;
    } else if (action.type == "finish_todo") {
        const todo = action.payload.todo;
        const isFinished = action.payload.isFinished;
        const updateList = state.map((t) => {
            if (t.id == todo.id) {
                todo.finished = isFinished;
            }
            return t;
        });

        return updateList;
    } else {
        return state;
    }
}

export default todoReducer;
