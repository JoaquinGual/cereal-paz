import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { ProductList } from "./components/ProductList/ProductList";

function App() {
  return (
    <div className="App">
       <NavBar/>
       <ItemListContainer greeting="Hola Amigos"/>
      <ProductList/>
    </div>
  );
}

export default App;
