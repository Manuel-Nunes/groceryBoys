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

      <TabsSectionWrapper>
        <Heading>Filter:</Heading>
        <Container>
          <PurchasedTabs active={filter} onFilterClick={onFilterClick}/>
        </Container>
      </TabsSectionWrapper>

      <TabsSectionWrapper>
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
      </TabsSectionWrapper>
    </FilterList>
  );
};

const FilterList = styled.ul`
  display: flex;
  margin: 1vh 0;
  background: #72C100;
  max-width: 100vw;
  width: calc( 100%);
  padding: 0;
  text-align: left;
  justify-content: center;
  list-style-type: none;
  border-radius: 4px;
  min-height: 30vh;
  flex-direction: column;

  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    min-height: 15vh;
  }
`;

const Container = styled.li`
  display: flex;
  flex-wrap: nowrap;
  gap: 5%;
  overflow-x: auto;
  text-align: center;
  flex-direction: row;

  ::-webkit-scrollbar {
    display: none;
  }
`;


const Heading = styled.li`
  text-decoration: underline;
  font-weight: 500;
  font-size: 1.5em;
  cursor: default;
`;


const TabsSectionWrapper = styled.section`
  display: flex;
  box-sizing:border-box;
  flex-direction: column;
  justify-content: space-evenly;
  width: calc(100% - 4vw);
  background-color: #4e8501;
  padding: 0% 5%;
  margin: 2vw 2vw;
  border-radius: 8px;
  min-height: 15vh;
  outline: solid white 3px;
`;
