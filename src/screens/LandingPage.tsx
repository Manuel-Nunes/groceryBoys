import '../global.css';

import { useNavigate } from 'react-router-dom';
import { LoadFile } from '../components/LoadFile';
import { useContext } from 'react';
import { GLContext } from '../components/ContextHandler';
import Scene from '../components/Scene';
import { styled } from 'styled-components';
import Image from '../components/Image';

const ButtonDiv = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

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
        <Image
          height='100px'
          width='100px'
          src='./Resources/shoppingBasket.png'
          margin='5vh 0'
        />
        <h1>Create a list of all the items you need!</h1>
        <ButtonDiv>
          <button className='NavButton PaddedButton' onClick={handleCreate}>Create List</button>
          <LoadFile/>
        </ButtonDiv>
      </Section>
    </Scene>
  );
}

const Section = styled.section`
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
