import styled from 'styled-components';

import {
  Store
} from '../types/types';

import {
  StoreTab
} from './StoreTab';

import {
  PurchasedTabs
} from './PurchasedTabs';

interface TabsProps {
  stores: ( Store | null )[];
  active: Store | null | undefined;
  filter: boolean | null | undefined;
  onClick: ( store: Store | null ) => void;
  onFilterClick: ( purchased: boolean | null ) => void;
}

export const Tabs = ( {
  stores,
  active,
  filter,
  onClick,
  onFilterClick
}: TabsProps ): JSX.Element => {
  return (
    <FilterList>
      <Heading>Filter:</Heading>
      <Container>
        <PurchasedTabs active={filter} onFilterClick={onFilterClick}/>
      </Container>
      <Heading>Stores:</Heading>
      <Container>
        {stores?.map( ( value, index ) => (
          <StoreTab
            key={`tab-${ index }`}
            onClick={() => onClick( value )}
            active={value == active}
            {...value}/>

        ) )

        }
      </Container>
    </FilterList>
  );
};

const FilterList = styled.ul`
  display: flex;
  background: #72C100;
  max-width: 100vw;
  width: calc( 100% - 32px);
  height: 120px;
  gap: 10px;
  padding: 0 16px;
  text-align: left;
  flex-direction: column;
  justify-content: center;
  list-style-type: none;
  border-radius: 4px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.li`
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


const Heading = styled.li`
  text-decoration: underline;
  font-weight: bold;
`;
