import { useState } from "react";
import ToDoCard from "./ToDoCard.jsx";

function App() {
    const [todos, setToDo] = useState({
        allToDos: [],
    });

    function addToDo(event) {
        event.preventDefault();

        const id = Math.random();
        const message = event.target.message.value;

        setToDo((prevData) => ({
            allToDos: [...prevData.allToDos, { id: id, message: message }],
        }));
    }

    const removeToDo = (index) => {
        setToDo({
            allToDos: todos.allToDos.filter((_, i) => i !== index),
        });
    };

    return (
        <main className="bg-[#4f1862] w-[100vw] min-h-screen pb-10 flex flex-col items-center gap-7">
            <form
                onSubmit={addToDo}
                className="flex items-center justify-center gap-0 w-[100%] h-[20vh]"
            >
                <input
                    className="w-[400px] py-3 px-5 rounded-l-lg h-[100px] text-2xl placeholder:text-xl outline-none"
                    type="text"
                    placeholder="Write Here ..."
                    name="message"
                    required
                />
                <div className="h-[100px] bg-white flex justify-center items-center pr-5 rounded-r-lg">
                    <button
                        type="submit"
                        className="text-white bg-[#4f1862] py-2 w-[100px] rounded-lg"
                    >
                        Add
                    </button>
                </div>
            </form>
            <div className="w-[90%] flex flex-wrap justify-center gap-7">
                {todos.allToDos.map((todo, index) => (
                    <ToDoCard
                        key={todo.id}
                        index={index + 1}
                        message={todo.message}
                        removeToDo={() => removeToDo(index)}
                    />
                ))}
            </div>
        </main>
    );
}

export default App;
