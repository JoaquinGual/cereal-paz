import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { ProductDetailContainer } from "./components/ProductDetailContainer/ProductDetailContainer";
import { ProductListContainer } from "./components/ProductListContainer/ProductListContainer";
import './styles/genericStyles.css'
import { Cart } from "./components/Cart/Cart";
import { CartContextProvider } from "./Context/CartContext";
import { Toaster } from "react-hot-toast";



function App() {


  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ProductListContainer greeting='' />} />
            <Route path='/detalle/:productId' element={<ProductDetailContainer />} />
            <Route path='/productos/:categoriaId' element={<ProductListContainer />} />
            <Route path='/productos' element={<ProductListContainer />} />
            <Route path='/cart' element={<Cart />} />
            {/* <Route path='/promociones' element={<Promociones/>}/> */}
            {/* <Route path='/contacto' element={<Contacto/>}/> */}
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      <Toaster/>
    </div>
  );
}

export default App;
