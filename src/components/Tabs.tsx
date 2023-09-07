import { styled } from 'styled-components';
import { Store } from '../types/types';
import { JSXElement } from '@babel/types';
import { StoreTab } from './StoreTab';
import { PurchasedTabs } from './PurchasedTabs';

interface TabsProps {
  stores: ( Store | null )[];
  onClick: ( store: Store | null ) => void;
  onFilterClick: ( purchased: boolean | null ) => void;
}

export const Tabs = ( {
  stores,
  onClick,
  onFilterClick
}: TabsProps ): JSX.Element => {
  return (
    <Nav>
      <Container>
        <PurchasedTabs onFilterClick={onFilterClick}/>
      </Container>
      <Container>
        {stores?.map( ( value, index ) => (
          <StoreTab
            key={`tab-${ index }`}
            onClick={() => onClick( value )}
            {...value}/>
            
        ) )

        }
      </Container>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  background: #72C100;
  width: calc( 100% - 16px);
  height: 60px;
  gap: 10px;
  padding-left: 16px;
  flex-wrap: nowrap;
  overflow-x: auto;
  text-align: center;
  flex-direction: column;
  justify-content: center;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.section`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  overflow-x: auto;
  text-align: center;
  flex-direction: row;

  ::-webkit-scrollbar {
    display: none;
  }
`;