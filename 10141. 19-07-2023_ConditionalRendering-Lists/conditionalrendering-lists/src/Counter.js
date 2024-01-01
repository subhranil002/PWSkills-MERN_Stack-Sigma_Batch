import { useState } from "react";

function Counter() {
    const [x, setX] = useState(0);
    const [todos, setTodos] = useState(["ToDo 1", "ToDo 2", "ToDo 3"]);

    return (
        <>
            Count : {x} is {x % 2 === 0 ? "Even" : "Odd"}
            <button onClick={() => setX(x + 1)}>Inc</button>
            <button onClick={() => setX(x - 1)}>Dec</button>
            <br />
            <br />
            <br />
            <ul>
                {todos.map((todo) => {
                    return <li>{todo}</li>;
                })}

                <button onClick={() => setTodos([...todos, "another one"])}>
                    Click
                </button>
            </ul>
        </>
    );
}

export default Counter;
