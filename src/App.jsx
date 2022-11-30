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

function App() {

  return (
    <div className="App">
      <NavBar/>
      <GlassesList/>
      <GlassDetail/>
      {/* <ProductsList/>
      <CharList/> */}
      {/* <ItemListContainer greeting='Hola mundo' />
      <h1>¡Hola mundo {nombre}!</h1>

      <Clicker/>

      {/* <strong style={ estilos }>Este es un mensaje</strong>
      { boton }

      <Saludo name='Gabriel' lastname='Lerda' age={31} action={mensaje}/>
      <Saludo name='Ana' lastname='Lopez' age={25}/>

      <li>fresa</li>
      <li>melon</li>
      <li>sandia</li>
      <li>berrys</li>
      <li>banano</li>
      <Footer>
        <strong>Enlace 1</strong>
        <strong>Enlace 2</strong>
      </Footer> */}
    </div>
  );
}

export default App;
