import {
    ADD_TODO,
    EDIT_TODO,
    DELETE_TODO,
    FINISH_TODO,
} from "../constants/actions";

export const finishTodo = (todo, isFinished) => ({
    type: FINISH_TODO,
    payload: { todo, isFinished },
});

export const addTodo = (inputText) => ({
    type: ADD_TODO,
    payload: { todoText: inputText },
});

export const deleteTodo = (todo) => ({
    type: DELETE_TODO,
    payload: { todo },
});

export const editTodo = (todo, todoText) => ({
    type: EDIT_TODO,
    payload: { todo, todoText },
});
