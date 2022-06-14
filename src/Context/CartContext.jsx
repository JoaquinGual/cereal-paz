import { useState, createContext } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        let exist = false
        let cart2 = cart.map(item => {

            if (item.id === product.id) {
                item.cantidad = product.cantidad
                exist = true;

            }
            return item;
        })

        if (exist) {
            setCart([...cart2])
        }
        else {
            setCart([...cart2, product])
        }
    }

    const CountProducts = () => {
        let acumProducts = 0
        cart.forEach(product => {
            acumProducts += product.cantidad
        })
        return acumProducts
    }
    const CountProductsAdded = (id) => {
        const prod = cart.find(prod =>prod.id === id)
        return prod ? prod.cantidad : 0
    }

    const RemoveProduct = (id) => {
        const cart2 = cart.filter(product => product.id !== id)
        setCart([...cart2])
    }



    return (
        <CartContext.Provider value={{ cart, addToCart, CountProducts,CountProductsAdded,RemoveProduct }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext