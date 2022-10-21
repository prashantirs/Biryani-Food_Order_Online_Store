import React from "react";
import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        // The concat() method concatenates (joins) two or more arrays.
        // The concat() method returns a new array, containing the joined arrays 2 or more 
        // without changing the existing array. Syntax : array1.concat(array2, array3, ..., arrayX)
        
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        
        //if item already exists in cart
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id); //findIndex() Javascript method returns the index if exists
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }else{
           updatedItems = state.items.concat(action.item);
        }
        
        return {
            items: updatedItems,
            totalAmount: updateTotalAmount,
        };
    }

    if(action.type === 'REMOVE'){
        
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        let updatedItems;
        
        if(existingCartItem.amount === 1){
            updatedItems = state.items.filter(item => item.id !== action.id);
        }else{
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
      
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    return defaultCartState; 
}

const CartProvider = (props) => {
    const [cartState,dispatchCartAction] = useReducer(cartReducer, defaultCartState); //default cart state
    
    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item}); //in action we passing item
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id}); //action we pass is (id)
    };
    
    const cartContextProvider = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }
  return( 
    <CartContext.Provider value={cartContextProvider}>
        {props.children}
    </CartContext.Provider>);
};

export default CartProvider;
