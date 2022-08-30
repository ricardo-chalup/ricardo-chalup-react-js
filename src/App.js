import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer.jsx/ItemListContainer.jsx';



function App() {
  return (
    <>
    <NavBar/>
    
    <ItemListContainer  texto='Hola' />
    
    </>
    
  );
}

export default App;


