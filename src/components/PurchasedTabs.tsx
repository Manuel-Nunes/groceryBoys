import {
  styled
} from 'styled-components';

interface TabsProps {
  onFilterClick: ( purchased: boolean | null ) => void;
  active: boolean | null | undefined;
}

export const PurchasedTabs = ( {
  onFilterClick,
  active
}: TabsProps ): JSX.Element => {
  return (
    <>
      {
        active == null
          ? <ActiveTab key="all" onClick={() => onFilterClick( null )}>All</ActiveTab>
          : <Tab key="all" onClick={() => onFilterClick( null )}>All</Tab>
      }
      {
        active == true
          ? <ActiveTab key="purchased" onClick={() => onFilterClick( true )}>Purchased</ActiveTab>
          : <Tab key="purchased" onClick={() => onFilterClick( true )}>Purchased</Tab>
      }
      {
        active == false
          ? <ActiveTab key="outstanding" onClick={() => onFilterClick( true )}>Outstanding</ActiveTab>
          : <Tab key="outstanding" onClick={() => onFilterClick( false )}>Outstanding</Tab>
      }
    </>
  );
};

const Tab = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

const ActiveTab = styled.p`
  text-decoration: underline;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;
