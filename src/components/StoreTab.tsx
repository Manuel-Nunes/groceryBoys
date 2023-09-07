import styled from 'styled-components';

interface StoreProps {
  value?: string;
  display?: string;
  key: string;
  onClick: () => void;
}

export const StoreTab = ( {
  // value = 'all',
  display = 'All',
  onClick
}: StoreProps ): JSX.Element => {
  return (
    <Tab
      onClick={onClick}>
      { display }
    </Tab>
  );
};

const Tab = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;
