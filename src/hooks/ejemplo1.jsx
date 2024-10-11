// Ejemplo de uso del hook useState

// Crear un componente de tipo funcion y acceder a su estado 
// privado a traves de un hook y ademas poder modificarlo 
import React, { useState } from 'react';


const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorInicial = 0;
    //  Valor inicial para una persona
    const personaInicial = {
        nombre: 'Martin',
        email : 'martin@imagroup.com'
    }
   /*
    queremos que el valor inicial y personainicial sean
    parte del estado del componente para asi poder gestionar su cambio
    y que este se vea reflejado en la vista del component 
    const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
   */

    const [contador,setContador] = useState(valorInicial);
    const [persona,setPersona] = useState(personaInicial);
    // Funcion para actualizar el estado privado que contiene el contador
    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }
    // funcion para actualizar el estado de persona 
    function actualizarPersona(nombre){
        setPersona(
            {
                nombre: 'pepe',
                email: 'pepe@gmail.com'
            }
        )
    }


    return (
        <div>
            <h1>*** Ejemplo de useState()***</h1>
            <h2>Contador : {contador}</h2>
            <h2> DATOS DE LA PERSONA</h2>
            <h3>nombre : {persona.nombre}</h3>
            <h4>Email: {persona.email}</h4>
            {/* Bloque de botones para actualizar el estado del componente */}
            <button onClick={incrementarContador}>incrementarContador</button>
            <button onClick={actualizarPersona}>actualizarPersona</button>

        </div>
    );
}

export default Ejemplo1;
