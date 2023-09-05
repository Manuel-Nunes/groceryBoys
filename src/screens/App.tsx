import '../global.css';
import Scene from '../components/Scene';
import { useContext, useEffect } from 'react';
import { GLContext } from '../components/ContextHandler';


function App() {
  const {context, storeContext} = useContext( GLContext );
  async function handleOpen() {
    console.log( `APP context: ${ JSON.stringify( context ) }` );
    console.log( `APP Store context: ${ JSON.stringify( storeContext ) }` );
  }

  return (
    <Scene>
      <p>Placeholder for list create screen</p>
      <ul className="btnList">
        <li><button className='DefaultButton' onClick={handleOpen}>Check Context</button></li>
      </ul>
    </Scene>
  );
}

export default App;