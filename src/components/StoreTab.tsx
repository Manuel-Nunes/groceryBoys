import styled from 'styled-components';

interface StoreProps {
  value?: string;
  display?: string;
  key: string;
  onClick: () => void;
  active: boolean;
}

export const StoreTab = ( {
  display = 'All',
  onClick,
  active
}: StoreProps ): JSX.Element => {
  return ( !active
    ? <Tab
      onClick={onClick}>

      { display }
    </Tab>
    : <ActiveTab
      onClick={onClick}>

      { display }
    </ActiveTab>
  );
};

const Tab = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  white-space: nowrap;
`;

const ActiveTab = styled.p`
  text-decoration: underline;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  white-space: nowrap;
`;
