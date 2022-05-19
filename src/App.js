import { Counter } from "./components/Counter/Counter";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
       <NavBar/>
       <ItemListContainer greeting="Hola Amigos"/>
       <Counter/>
    </div>
  );
}

export default App;
