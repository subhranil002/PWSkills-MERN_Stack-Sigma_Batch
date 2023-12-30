import "./App.css";
import DogCard from "./DogCard.js";

function App() {
    return (
        <div className="App">
            Hello
            <DogCard
                name="Bruno"
                image="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
            />
            <DogCard
                name="Tiger"
                image="https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg"
            />
        </div>
    );
}

export default App;
