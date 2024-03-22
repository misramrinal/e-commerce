import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './pages/shop';
import ShopCatagory from './pages/shopcatagory';
import Product from './pages/product';
import Cart from './pages/cart';
import Login from './pages/login';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCatagory category="mens"/>}/>
        <Route path='/womens' element={<ShopCatagory category="womens"/>}/>
        <Route path='/kids' element={<ShopCatagory category="kids"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productID' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
