import { useState } from 'react';
import './App.css'
import CalculoPesado from './components/CalculoPesado';
import CompFilho from './components/CompFilho';
import Contador from './components/Contador';
import ContadorCallback from './components/ContadorCallback';
import Container from './components/Container';
import DisplayWindowSize from './components/DisplayWindowSize';
import SyncUser from './components/Exs/SyncUser';
import ExUseEffect from './components/ExUseEffect';
import PerfilUsuario from './components/PerfilUsuario';
import ValorCtx from './components/ValorCtx';
import { ExContextProvider } from './contexts/ExContext';
import ShowOnline from './components/Exs/ShowOnline';

function App() {
  const [user, setUser] = useState({name:"Lucas", age:21, height:"1.78m"});

  return (
    <>
      {/* <ExUseEffect /> */}
      
      {/* <ExContextProvider>
        <CompFilho />
        <ValorCtx />
      </ExContextProvider> */}

      {/* <Contador /> */}

      {/* <DisplayWindowSize /> */}

      {/* <Container>
        <h1>vapo</h1>
        <p>aoba</p>
      </Container> */}

      {/* <PerfilUsuario usuarioId={1} /> */}

      {/* <CalculoPesado numero={7}/> */}

      {/* <ContadorCallback /> */}

      {/* ex 01 */}
      <div style={{backgroundColor: 'rgba(88, 26, 26, 0.45)'}}>
        <input
          value={user.name}
          onChange={(e) => setUser(prev => ({...prev, name:e.target.value}))} />
        <SyncUser user={user} />
      </div>

      {/* ex 02 */}
      <div style={{backgroundColor: 'rgba(71, 88, 26, 0.45)'}}>
        
      </div>

      {/* ex 03 */}
      <div style={{backgroundColor: 'rgba(26, 63, 88, 0.45)'}}>
        <ShowOnline />
      </div>
    </>
  )
}

export default App
// aula 29