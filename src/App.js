import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { ProductDetailContainer } from "./components/ProductDetailContainer/ProductDetailContainer";
import { ProductListContainer } from "./components/ProductListContainer/ProductListContainer";
import './styles/genericStyles.css'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<ProductListContainer greeting=''/>}/>
      <Route path='/detalle/:productId' element={<ProductDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
