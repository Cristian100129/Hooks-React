import React, {useState, useContext, createContext} from 'react';

// Creamos el contexto fuera de los componentes
const miContexto = createContext(null);

const Componente1 = () => {
    // Usamos el contexto que nos proporciona el padre (MiComponenteConContexto)
    const contexto = useContext(miContexto);

    return (
        <div>
            <h1>
                El token es: {contexto.token}
            </h1>
            {/* Pintamos Componente2 */}
            <Componente2 />
        </div>
    );
}

const Componente2 = () => {
    // Usamos el contexto que nos proporciona el componente padre
    const contexto = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesión es: {contexto.sesion}
            </h2>
        </div>
    );
}

export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }
    
    // Creamos el estado de este componente 
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion() {
        setSessionData({
            token: 'JW123456789',
            sesion: sessionData.sesion + 1
        });
    }

    return (
        <miContexto.Provider value={sessionData}>
            {/* Todo lo que esté aquí dentro puede leer los datos de sessionData */}
            {/* Además, si se actualiza, los componentes aquí también lo actualizan */}
            <h1>Ejemplo de useState() y useContext()</h1>
            <Componente1 />
            <button onClick={actualizarSesion}>Actualizar sesión</button>
        </miContexto.Provider>
    );
}




