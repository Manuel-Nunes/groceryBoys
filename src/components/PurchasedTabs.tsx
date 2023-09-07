import { styled } from 'styled-components';

interface TabsProps {
  onFilterClick: ( purchased: boolean | null ) => void;
}

export const PurchasedTabs = ( {
  onFilterClick
}: TabsProps ): JSX.Element => {
  return (
    <>
      <Tab key="all" onClick={() => onFilterClick( null )}>All</Tab>
      <Tab key="purchased" onClick={() => onFilterClick( true )}>Purchased</Tab>
      <Tab key="outstanding" onClick={() => onFilterClick( false )}>Outstanding</Tab>
    </>
  );
};

const Tab = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;