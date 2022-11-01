
import {Container} from 'react-bootstrap'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavberComponent from "./component/NavberComponent";
import 'bootstrap/dist/css/bootstrap.min.css'
import Store from './Pages/Store';
import Cancel from './Pages/Cancel';
import Success from './Pages/Success';
import CartProvder from './CartContext';
function App() {
  return (
  <CartProvder> 
  <Container>
   <NavberComponent />
    <BrowserRouter>
    <Routes>
      <Route index element={<Store/>}/>
      <Route path='success' element={<Success/>}/>
      <Route path='cancel' element={<Cancel/>}/>
    </Routes>
    </BrowserRouter>
  </Container>
   </CartProvder>  
      
   
  );
}

export default App;
