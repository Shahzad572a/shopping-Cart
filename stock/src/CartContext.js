import { createContext,useState } from "react";
import {products,getProduct} from "./ProductDB";


export const CartContext = createContext({
    items:[],
    getproductQuantity: () => {},
    addOneToCart: () => {},
    removeOneToCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
});




function CartProvder({children}){
const [cartProducts, setCartProducts]=useState([]);




function getproductQuantity(id){
   const quantity = cartProducts.find(product =>product.id===id)?.quantity
   if(quantity===undefined){
    return 0;
   }
   return quantity;
}




const addOneToCart =(id) => {
    const quantity=getproductQuantity(id)
    if (quantity === 0) {  //product is not in cart
       setCartProducts(
        [
            ...cartProducts,
            {
                id:id,
                quantity:1
            }
        ]
       )
    } else {
        setCartProducts(
            cartProducts.map(product => product.id===id ? {...product, quantity: product.quantity +1} : product)
        )
    }
   
}



const removeOneToCart =(id) => {
    const quantity=getproductQuantity(id)

    if(quantity == 1){
        deleteFromCart(id)
    }else{
        setCartProducts(
            cartProducts.map(product => product.id===id ? {...product, quantity: product.quantity - 1} : product)
        )
    }
}


const deleteFromCart = (id) => {
setCartProducts(cartProducts => cartProducts.filter(currPro => {
    return currPro.id !=id;
})
)
}


const getTotalCost = () => {
    let totalCost = 0;
    cartProducts.map((cartitem) => {
        const productData = getProduct(cartitem.id)
        totalCost += (productData.price * cartitem.quantity)
    })
    return totalCost
}



    const contextValue ={
        items:cartProducts,
        getproductQuantity,
        addOneToCart,
        removeOneToCart,
        deleteFromCart,
        getTotalCost,
    }
    return(
        <CartContext.Provider value={contextValue}>
          {children}
        </CartContext.Provider>
    )
}
export default CartProvder