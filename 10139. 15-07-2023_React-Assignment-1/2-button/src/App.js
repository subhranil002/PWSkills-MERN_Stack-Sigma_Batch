import "./App.css";
import {Button} from "./Button.js";

const actionFunction = () => {
  console.log("Button Clicked");
}

function App() {
    return (
        <div className="App">
            <Button text="Click Here" onClick={actionFunction} />
        </div>
    );
}

export default App;
