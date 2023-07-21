import "../stylesheets/BotonClear.css";

export const BotonClear = ({children, manejarClic}) => (
  <div 
    className="contenedor-boton-clear"
    onClick={manejarClic}
  >{children}</div>
);