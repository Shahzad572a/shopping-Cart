import {Card,Row,Col,Button,Form} from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { useContext } from 'react'
const Pcard = ({productD}) => {
    const cart =useContext(CartContext);
    const productQuality =cart.getproductQuantity(productD.id)
     
  return (  
    <Card>
        <Card.Body>
            <Card.Title>{productD.tittle}</Card.Title>
            <Card.Text>{productD.price}</Card.Text>
            {productQuality > 0 ? 
             <>
            <Form as={Row}>
               <Form.Label column={true} sm="6">In Cart: {productQuality}</Form.Label>
               <Col sm='6'>
                <Button sm='6' onClick={() => cart.addOneToCart(productD.id)} className='mx-2'>+</Button>
                <Button sm='6' onClick={() => cart.removeOneToCart(productD.id)} className='mx-2'>-</Button>
               </Col>
            </Form>
            <Button variant="danger" onClick={() => cart.deleteFromCart(productD.id)} className='my-2'>Remove from Cart </Button>
             </>
             :
             <Button variant='primary'onClick={() => cart.addOneToCart(productD.id)}>Add To Cart</Button>
            }
            </Card.Body>
    </Card>
  )
}

export default Pcard
