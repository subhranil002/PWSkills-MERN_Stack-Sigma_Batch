import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todoText = action.payload.todoText;
            state.todoList.push({
                id: state.todoList.length + 1,
                todoData: todoText,
                finished: false,
            });
        },
        editTodo: (state, action) => {
            const todo = action.payload.todo;
            const todoText = action.payload.todoText;
            state.todoList = state.todoList.map((t) => {
                if (t.id == todo.id) {
                    t.todoData = todoText;
                }
                return t;
            });
        },
        deleteTodo: (state, action) => {
            const todo = action.payload.todo;
            state.todoList = state.todoList.filter((t) => t.id != todo.id);
        },
        finishTodo: (state, action) => {
            const todo = action.payload.todo;
            const isFinished = action.payload.isFinished;
            state.todoList = state.todoList.map((t) => {
                if (t.id == todo.id) {
                    t.finished = isFinished;
                }
                return t;
            });
        },
    },
});

export const { addTodo, editTodo, deleteTodo, finishTodo } = todoSlice.actions;
export default todoSlice.reducer;