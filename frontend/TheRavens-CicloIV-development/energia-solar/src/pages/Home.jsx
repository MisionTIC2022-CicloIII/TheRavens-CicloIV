import { useState } from 'react';
import reactLogo from '../assets/react.svg';

const Home = () => {
  
      const [count, setCount] = useState(0)
      //Hooks useState
      const [estado, setEstado] = useState(false)
      
      const handletSubmit = () => {
         console.log("Hacer visible el mensaje");
         setEstado(!estado);
      };

  return (
   <div className="App">
   <div>
      <h3>Integrantes del grupo:</h3>
        <p>
          <strong><br/>
          Merly Tatiana Campo Guevara<br/>
          Linda Jazmin Avendaño Bautista<br/>
          Alfredo Alonso Gil Cuello<br/>
          Deyber Antonio Jiménez Gordillo<br/>
          Juan José Duran Henao<br/>
          </strong> 
        </p>
      <a href="https://vitejs.dev" target="_blank">
       <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
     <a href="https://reactjs.org" target="_blank">
       <img src={reactLogo} className="logo react" alt="React logo" />
     </a>
   </div>
   <button
     onClick= {handletSubmit}
   >
     Mostrar h1
   </button>

   {
     estado
           ?
           <h1>Vite + React</h1>
           :
           <h1>............</h1>
   }

   <div className="card">
     <button onClick={() => setCount((count) => count + 1)}>
       count is {count}
     </button>
     <p>
       Edit <code>src/App.jsx</code> and save to test HMR
     </p>
   </div>
   <p className="read-the-docs">
     Click on the Vite and React logos to learn more
   </p>
   </div>
  )
}

export default Home