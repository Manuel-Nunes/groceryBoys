import styled from 'styled-components';
import { Store } from '../types/types';
import { JSXElement } from '@babel/types';
import { StoreTab } from './StoreTab';

interface TabsProps {
  stores: ( Store | null )[];
  onClick: ( store: Store | null ) => void;
}

export const Tabs = ( {
  stores,
  onClick
}: TabsProps ): JSX.Element => {
  return (
    <Container>
      {stores?.map( ( value, index ) => (
        <StoreTab
          key={`tab-${ index }`}
          onClick={() => onClick( value )}
          {...value}/>
          
      ) )

      }
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  background: #72C100;
  width: calc( 100% - 16px);
  height: 30px;
  gap: 20px;
  padding-left: 16px;
  flex-wrap: nowrap;
  overflow-x: auto;
  text-align: center;
  flex-direction: row;

  ::-webkit-scrollbar {
    display: none;
  }
`;