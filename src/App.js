import './App.css';
import { Calculadora } from './componentes/Calculadora';
import LogoCalculadora from './componentes/Logo';

function App() {
  return (
    <div className="App">
      <div className='contenedor-logo-calculadora'>
        <LogoCalculadora />
      </div>
      <div className='contenedor-principal-calculadora'>
        <Calculadora />
      </div>
      
    </div>
  );
}

export default App;
