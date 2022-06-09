import React, { createContext,useState,useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { ProductDetailContainer } from "./components/ProductDetailContainer/ProductDetailContainer";
import { ProductListContainer } from "./components/ProductListContainer/ProductListContainer";
import './styles/genericStyles.css'
import { Cart } from "./components/Cart/Cart";

export const Context = createContext();

function App() {

  const [cart, setCart] = useState([])

  console.log(cart)
  
  const addToCart = (product) => {
    let exist = false
    let cart2 = cart.map(item => {
      
      if (item.id === product.id) {
        item.cantidad = item.cantidad + product.cantidad
        exist = true;
      }
      else{
        exist = false
      }
      return item;
    })
    console.log(cart2)
    console.log(exist)
    
    if (exist) {
      setCart([...cart2])
    }
    else{
      setCart([...cart, product])
    }
  }

  const CountProducts = () => {
    let acumProducts = 0
    cart.forEach(product => {
      acumProducts += product.cantidad
    })
    return acumProducts
  }

  return (
    <div className="App">
      <Context.Provider value={{cart,addToCart,CountProducts}}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ProductListContainer greeting='' />} />
            <Route path='/detalle/:productId' element={<ProductDetailContainer />} />
            <Route path='/productos' element={<ProductListContainer />} />
            <Route path='/cart' element={<Cart />} />
            {/* <Route path='/promociones' element={<Promociones/>}/> */}
            {/* <Route path='/contacto' element={<Contacto/>}/> */}
          </Routes>
        </BrowserRouter>
      </Context.Provider>

    </div>
  );
}

export default App;
