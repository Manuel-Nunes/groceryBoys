import '../global.css';

import {Credentials, useAuth} from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { LoadFile } from '../components/LoadFile';
import { useContext, useEffect } from 'react';
import { GLContext } from '../components/ContextHandler';

export default function LandingPage() {
  const navigate = useNavigate();
  const {context, storeContext, setStoreContext} = useContext( GLContext );


  async function handleCreate() {
    navigate( '/list' );
  }

  async function handleOpen() {
    // TODO
    // 1. Open file
    // 2. Read file and load into context
    // 3. navigate
    console.log( `context: ${ JSON.stringify( context ) }` );
    console.log( `Store context: ${ JSON.stringify( storeContext ) }` );

  }

  return (
    <section>
      {/* <img src={require( './shopping-basket.png' )} style={{width:100}}/> */}
      <h1>Create a list of all the items you need!</h1>
      <ul className="btnList">
        <li><button className='DefaultButton' onClick={handleCreate}>Create List</button></li>
        <li><LoadFile/></li>
        <li><button className='DefaultButton' onClick={handleOpen}>Check Context</button></li>

      </ul>
    </section>
  );
}