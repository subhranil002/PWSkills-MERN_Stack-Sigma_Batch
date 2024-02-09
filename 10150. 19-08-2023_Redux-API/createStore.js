import { bindActionCreators, createStore } from "redux";

const ADD_TODO = "add_todo";
const EDT_TODO = "edit_todo";
const DEL_TODO = "delete_todo";
const FNS_TODO = "finish_todo";

function todoReducer(state, action) {
    if (action.type == ADD_TODO) {
        const todoText = action.payload.todoText;
        return [
            ...state,
            {
                id: state.length + 1,
                todoData: todoText,
                finished: false,
            },
        ];
    } else if (action.type == EDT_TODO) {
        const todo = action.payload.todo;
        const todoText = action.payload.todoText;
        const updateList = state.map((t) => {
            if (t.id == todo.id) {
                todo.todoData = todoText;
            }
            return t;
        });

        return updateList;
    } else if (action.type == DEL_TODO) {
        const todoid = action.payload.todoid;
        const updateList = state.filter((t) => t.id != todoid);

        return updateList;
    } else if (action.type == FNS_TODO) {
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

const { dispatch, subscribe, getState, replaceReducer } = createStore(
    todoReducer,
    []
);

function addTodo(todoText) {
    return { type: ADD_TODO, payload: { todoText } };
}

function deleteTodo(id) {
    return { type: DEL_TODO, payload: { todoid: id } };
}

subscribe(() => console.log(getState()));
// [ { id: 1, todoData: 'ToDo 1', finished: false } ]
// [
//   { id: 1, todoData: 'ToDo 1', finished: false },
//   { id: 2, todoData: 'ToDo 2', finished: false }
// ]
// [ { id: 2, todoData: 'ToDo 2', finished: false } ]

const action = bindActionCreators({ addTodo, deleteTodo }, dispatch);

action.addTodo("ToDo 1");
action.addTodo("ToDo 1");
action.deleteTodo(1);
