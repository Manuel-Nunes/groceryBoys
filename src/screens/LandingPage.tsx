import '../global.css';

import { useNavigate } from 'react-router-dom';
import { LoadFile } from '../components/LoadFile';
import { useContext } from 'react';
import { GLContext } from '../components/ContextHandler';

export default function LandingPage() {
  const navigate = useNavigate();
  const {context, storeContext, setContext, setStoreContext} = useContext( GLContext );


  async function handleCreate() {
    context.ListItems.length = 0;
    setContext( {ListItems:[]} );
    setStoreContext( {stores:[ null ]} );
    navigate( '/list' );
  }

  return (
    <section>
      {/* <img src={require( './shopping-basket.png' )} style={{width:100}}/> */}
      <h1>Create a list of all the items you need!</h1>
      <ul className="btnList">
        <li><button className='DefaultButton' onClick={handleCreate}>Create List</button></li>
        <li><LoadFile/></li>
      </ul>
    </section>
  );
}