import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <main className="flex justify-center items-center h-[100vh] bg-[rgb(255,242,244)] font-sans">
            <div className="flex flex-col justify-between items-center bg-[rgb(255,73,87)] w-[25%] pb-12 pt-20 rounded-lg gap-10">
                <h1 className="text-5xl font-semibold text-white">{count}</h1>
                <div className="flex justify-between items-center gap-3">
                    <button
                        className="bg-[rgb(255,242,244)] p-4"
                        onClick={() => setCount(count + 1)}
                    >
                        Increment
                    </button>
                    <button
                        className="bg-[rgb(255,242,244)] p-4"
                        onClick={() => setCount(count - 1)}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </main>
    );
}

export default App;
