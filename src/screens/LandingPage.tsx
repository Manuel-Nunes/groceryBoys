import '../global.css';

import { useNavigate } from 'react-router-dom';
import { LoadFile } from '../components/LoadFile';
import { useContext } from 'react';
import { GLContext } from '../components/ContextHandler';
import Scene from '../components/Scene';
import { styled } from 'styled-components';

export default function LandingPage() {
  const navigate = useNavigate();
  const {setContext, setStoreContext} = useContext( GLContext );


  async function handleCreate() {
    setContext( {ListItems:[]} );
    setStoreContext( {stores:[ null ]} );
    navigate( '/list' );
  }

  return (
    <Scene>
      <Section>
        {/* <img src={require( './shopping-basket.png' )} style={{width:100}}/> */}
        <h1>Create a list of all the items you need!</h1>
        <ul className="btnList">
          <li><button className='NavButton' onClick={handleCreate}>Create List</button></li>
          <li><LoadFile/></li>
        </ul>
      </Section>
    </Scene>
  );
}

const Section = styled.section`
  margin: auto;
`;
