import React, {useEffect, useState} from 'react';
import './App.css';
import {getSaludo} from './services/saludoService'

const App =  () => {
 
  const [saludo, setSaludo] = useState(null);
  
  const callApi =async () => {
    const data = await getSaludo();
    setSaludo(data);
  };

 useEffect(() => {
 callApi();
}, [])

console.log("Respuesta ",saludo);
  return <h1 > Hola Mundo este es mi JSON: {JSON.stringify(saludo)}   </h1>;
}

/*const sumar = (a,b) => {

    return a+b;
}*/



export  default App;

