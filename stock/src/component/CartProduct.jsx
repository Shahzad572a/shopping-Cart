import {Button} from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { useContext } from 'react'
import { getProduct } from '../ProductDB'

const CartProduct = (props) => {
    const cart = useContext(CartContext)
    const id=props.id
    const quantity =props.quantity
    const productData = getProduct(id)


  return (
     <>
    <h3>{productData.tittle}</h3>
    <p>{quantity}</p>
    <p>${(quantity*productData.price).toFixed(2)}</p>
    <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
     </>
  )
}

export default CartProduct
