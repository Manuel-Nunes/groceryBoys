import styled from 'styled-components';

const HeaderHolder = styled.div`
  display: flex;
  justify-content: center;
  padding: 1vh 1vw;
`;

const HeaderBodyHolder = styled.div`
  width: 100%;
`;

const BurgerButton = styled.div`
  aspect-ratio: 1/1;
  width: 10vw;
  background-color: transparent;
  border: none;
  background-image: url('../Resources/burger-menu.svg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
`;

function Header( {children}: React.PropsWithChildren ) {
  return (
    <HeaderHolder>
      <HeaderBodyHolder>
        {
          children
        }
      </HeaderBodyHolder>
      <BurgerButton/>
    </HeaderHolder>
  );
}

export default Header;