import React , {useReducer , createContext} from 'react'
import cartReducer from '../reducers/cartReducer'



export const CartContext = createContext()

const CartProvider = CartContext.Provider



export function CartWrapper({children}){

    let storedCart;
    if (typeof window !== 'undefined') {
        storedCart = JSON.parse(localStorage.getItem("cart"))
    }
    // let  storedCart = JSON.parse(localStorage.getItem("cart"))
    // const storedCart = [
    //     {
    //         "qty": 2,
    //         "name": "tisso_zcc",
    //         "price": 5000
    //     }
    // ]

    
    const [cart , dispatchCart] = useReducer(cartReducer , storedCart|| [])
    return <CartProvider value= {{cart , dispatchCart}}>{children}</CartProvider>
}