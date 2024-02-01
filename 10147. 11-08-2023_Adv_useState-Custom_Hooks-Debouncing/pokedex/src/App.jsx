import { Link } from "react-router-dom";
import CustomRoutes from "./routes/CustomRoutes.jsx";

function App() {
    return (
        <div className="flex flex-col p-12 justify-center items-center gap-8">
            <Link to="/">
                <h1 className="text-4xl font-bold font-mono tracking-[10px]">
                    Pokedex
                </h1>
            </Link>
            <CustomRoutes />
        </div>
    );
}

export default App;
