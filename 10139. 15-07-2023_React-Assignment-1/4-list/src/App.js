import './App.css';
import {List} from './List.js';

const items = ['Item 1', 'Item 2', 'Item 3'];

function App() {
  return (
    <div className="App">
      <List items={items}/>
    </div>
  );
}

export default App;
