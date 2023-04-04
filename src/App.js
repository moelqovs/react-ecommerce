import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import Brand from './assets/img/Brand.png';
import './App.css';



function App() {
  
  return (
    <div>
        <div className='Brand'>
          <img src={Brand} alt='Brand' className='imgBrand'/>
        </div>
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
