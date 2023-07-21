import "../stylesheets/Calculadora.css";
import { BotonClear } from "./BotonClear";
import { Pantalla } from "./Pantalla";
import { Boton, esOperador } from "./Boton";
import { useState } from "react";
import { evaluate } from "mathjs";

export function Calculadora() {

  let [numPantalla, setNumPantalla] = useState("0");

  const agregarNumPantalla = val => {
    if(numPantalla.length > 15) {
      alert("Maximo de 15 digitos alcanzado");
    }
    else {
      if(numPantalla[0] === "0") {
        numPantalla = numPantalla.slice(1,30);
      }
      const simbol1 = val;
      const simbol2 = numPantalla[numPantalla.length-1];

      if(esOperador(simbol1) && esOperador(simbol2)) {
        alert("No puedes ingresar dos simbolos a la vez");
      }
      else {
        setNumPantalla(numPantalla + val);
      }
    } 
  };
  const calcularResultado = val=> {
    try {
      if(numPantalla){
        setNumPantalla(evaluate(numPantalla));
      }  
    } catch {}
  };

  return(
    <div className="contenedor-calculadora">
      <div className="fila">
        <Pantalla 
          numPantalla={numPantalla}
        />
      </div>
      <div className="fila">
        <Boton manejarClic = {agregarNumPantalla}>1</Boton>
        <Boton manejarClic = {agregarNumPantalla}>2</Boton>
        <Boton manejarClic = {agregarNumPantalla}>3</Boton>
        <Boton manejarClic = {agregarNumPantalla}>+</Boton>
      </div>
      <div className="fila">
        <Boton manejarClic = {agregarNumPantalla}>4</Boton>
        <Boton manejarClic = {agregarNumPantalla}>5</Boton>
        <Boton manejarClic = {agregarNumPantalla}>6</Boton>
        <Boton manejarClic = {agregarNumPantalla}>-</Boton>
      </div>
      <div className="fila">
        <Boton manejarClic = {agregarNumPantalla}>7</Boton>
        <Boton manejarClic = {agregarNumPantalla}>8</Boton>
        <Boton manejarClic = {agregarNumPantalla}>9</Boton>
        <Boton manejarClic = {agregarNumPantalla}>*</Boton>
      </div>
      <div className="fila">
        <Boton manejarClic = {calcularResultado}>=</Boton>
        <Boton manejarClic = {agregarNumPantalla}>0</Boton>
        <Boton manejarClic = {agregarNumPantalla}>.</Boton>
        <Boton manejarClic = {agregarNumPantalla}>/</Boton>
      </div>
      <div className="fila">
        <BotonClear manejarClic={()=>setNumPantalla("0")}>
          Borrar
        </BotonClear>
      </div>
    </div>
  );
}

