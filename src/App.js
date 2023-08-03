import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import Brand from './assets/img/Brand.png';
import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './components/CartContainer/CartContainer.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { CartProvider } from './context/CartContext.jsx';
import { CheckForm } from './components/CheckForm/CheckForm';




function App() {
  
  return (
    
      <BrowserRouter>
        <CartProvider>
        <div>
              <div className='Brand'>
                <img src={Brand} alt='Brand' className='imgBrand'/>
              </div>
            <NavBar/>
              <Routes>
                <Route path='/' element={ <ItemListContainer/> }/>
                <Route path='/detail/:pid' element={ <ItemDetailContainer/> }/>
                <Route path='/categoria/:cid' element={ <ItemListContainer/> }/>
                <Route path='/cart' element={ <CartContainer/> }/>
                <Route path='/contacto' element={ <CheckForm/>}/>
                <Route path='*' element={ <Navigate to='/' /> } />
              </Routes>
            <Footer/>
            </div>
        </CartProvider>
      </BrowserRouter>
 
  );
}

export default App;
