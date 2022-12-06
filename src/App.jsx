import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Saludo from './components/Saludo';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Clicker from './components/Clicker';
import ProductsList from './components/ProductsList';
import CharList from './components/rickandmorty/CharList';
import GlassesList from './after1/GlassesList';
import GlassDetail from './after1/GlassDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharDetail from './components/rickandmorty/CharDetail';

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<GlassesList/>} />
        <Route path='/glass/:id' element={<GlassDetail/>} />
        <Route path='/rick' element={<CharList/>} />
        <Route path='/rick/:charId' element={<CharDetail/>} />
        <Route path='/phones' element={<ProductsList/>} />
      </Routes>
      <Footer/>
      {/* <GlassesList/>
      <GlassDetail/> */}
    </BrowserRouter>
  );
}

export default App;
