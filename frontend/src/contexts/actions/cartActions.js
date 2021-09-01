import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./actionTypes"

export const addToCart = (qty, name, price) => ({
  type: ADD_TO_CART,
  payload: { qty, name, price }
})

export const removeFromCart = (id, qty) => ({
  type: REMOVE_FROM_CART,
  payload: { id, qty }
})

export const clearCart = () => ({
  type: CLEAR_CART
})
