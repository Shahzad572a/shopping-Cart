import {Row,Col } from 'react-bootstrap'
import {products} from '../ProductDB'
import Pcard from '../component/Pcard'
const Store = () => {
  return (
    <>
    <h1 align="center" className='p-3'>Wellcome to the store</h1>
     <Row xs={1} md={3}>
      {products.map((product ,idx) =>(
        <Col align="center" key={idx}>
         <Pcard productD={product}/>
      </Col>
      ))}
      
       
     </Row>
     </>
  )
}

export default Store
 