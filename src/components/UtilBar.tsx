import { styled } from 'styled-components';
import { BackButton } from './BackButton';
import { Share } from './Share';

export const UtilBar = (): JSX.Element => {
  return ( 
    <Container>

      <BackButton/>

      <Share/>

      <button className='NavButton'>Save File</button>

    </Container> 
  );
};

const Container = styled.nav`
  display: grid;
  grid-template-columns: 1fr 4fr 4fr;
  flex-direction: row;
  width: 100%;
  min-height: 40px;
`;