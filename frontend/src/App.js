import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './pages/shop';
import ShopCatagory from './pages/shopcatagory';
import Product from './pages/product';
import Cart from './pages/cart';
import Login from './pages/login';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCatagory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCatagory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCatagory banner={kids_banner} category="kid"/>}/>
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
