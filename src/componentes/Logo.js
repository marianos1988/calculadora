import Logo from "../imagenes/logo.png";
import "../stylesheets/Logo.css";

function LogoCalculadora() {
  return(
    <div className="contenedor-logo">
      <img
        className="logo-calculadora"
        src={Logo}
        alt="Logo Calculadora"
      />
      <h2>Calculadora</h2>
    </div>      
  );
}

export default LogoCalculadora;