import "../stylesheets/Boton.css";

export const esOperador = (valor) => {
  return isNaN(valor) && (valor !== '.') && (valor !== "=");
};

export function Boton(props) {

  return(
      <div 
        className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ""}`.trim()} //el trim elimina espacios
        onClick={ ()=> props.manejarClic(props.children)} // que se llame una funcion que llama a otra funcion}
        >
          {props.children}
      </div>
  );
}