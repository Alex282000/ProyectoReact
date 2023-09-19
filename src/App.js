/*import logo from './logo.svg';
import logo2 from './logo.png';*/
import './App.css';
import {Logoproyecto} from './componentes/Logoproyecto';
/*import Casilla from './componentes/Casilla';*/
import {Menu} from './componentes/Menu2';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='Contenedor-principal'>

      <h1>Descripcion de Perritos</h1>
      <Menu />
      <Routes>
        <Route path ='/' element={<Logoproyecto 
      img='perro1.png'
      titulo='Titulo 1' 
      desc='Descripcion 1' />}> 
        </Route>

        <Route path ='/perrito' element={<Logoproyecto 
      img='perro2.png'
      titulo='Titulo 2' 
      desc='Descripcion 2' />}>
        </Route>
          <Route path ='/perrito2' element={<Logoproyecto 
      img='perrito.png'
      titulo='Titulo 3' 
      desc='Descripcion 3' />}>
        </Route>
      </Routes>
          
          {/*comentario para probar GIT*/}

      </div>
      {/*<Casilla />*/}
      
      {/*<img src={logo} className='App-logo' alt='logo' />
      <img src={logo2}  alt='logo' />*/}

      {/* <header className="App-header">
        <h1>Inicio del Proyecto</h1>
        <p>
          <div>
          <div className='div_nuevo'>Prueba de Div</div>  
          <div className='div_nuevo2'>Prueba de Div</div>
          </div>

          <table className='tabla' cellSpacing='5' cellPadding='5' >
            <tr>
              <td>Nombre</td>
              <td>Cantidad</td>
            </tr>
            <tr>
              <td>Juan Perez</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Angelina Jolie</td>
              <td>30</td>
            </tr>
          </table>

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
