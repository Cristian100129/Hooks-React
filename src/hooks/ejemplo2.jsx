/**
 * Ejemplo de uso de:
 * -useState()
 * -useRef() identifica elementos dentro de la lista 
 * -useEffect() controla los cambios en la vista 
 */

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {
    // vamos a crear dos contadores distintos
    // cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
    // vamos a crear una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente (vista HTML)
    const miRef = useRef(); 

    function incrementar1(){
        setContador1(contador1 +1);
    }
    function incrementar2(){
        setContador2(contador2 + 1);
    }
        /**
         * Trabajando con useEffect
         */

        /**
         * ? caso 1: Ejecutar SIEMPRE un snippet de codigo
         * Cada vez que haya un cambio en el estado del componente
         * se ejecuta aquello que este dentro de useEffect()
         */

        // useEffect(() => {
        //     console.log("Cambio en el estado del componente");
        //     console.log("Mostrando Referencia a elemento del DOM:");
        //     console.log(miRef);
        // },);  // Lista de dependencias vacía para que se ejecute solo una vez al montar el componente
        
        /**
         * ? caso 2: Ejecutar solo cuando cambie contador1
         * cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
         * En caso de que cambie contador2, no habra ejecucion 
         */

        // useEffect(()=>{
        //     console.log('Cambio en el estado del componente');
        //     console.log('mostrando referencia a elemento DOM');
        //     console.log(miRef)
        // }, [contador1])

        useEffect(()=>{
            console.log('Cambio en el estado del componente');
            console.log('mostrando referencia a elemento DOM');
            console.log(miRef)
        }, [contador1, contador2])




    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef(), y useEffect() ***</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}> 
                Ejemplo de elemento referenciado
            </h4>
            {/* Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>incrementar contador 2</button>
            </div>

        </div>
    );
}

export default Ejemplo2;
