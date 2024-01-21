import { useState } from "react";
import "./App.css";
import AddToDo from "./AddToDo.jsx";
import ToDOContainer from "./ToDoContainer.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <main className="bg-[#4f1862] w-[100vw] h-[100vh] flex flex-col items-center gap-7">
            <AddToDo />
            <ToDOContainer />
        </main>
    );
}

export default App;
