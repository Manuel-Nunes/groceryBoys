import { styled } from 'styled-components';

const BigBody = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  background-color: var(--regularBackgroundColor);
  color: var(--fontColor);
`;

const InternalBody = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface SceneProps {
  children?: React.ReactNode
  gridTemplate?: string;
}

function Scene( 
  {
    children,
    gridTemplate
  }: SceneProps 
) {
  return (
    <BigBody>
      {/* <Header></Header> */}
      <InternalBody style={
        { 
          display: ( gridTemplate )? 'grid': 'flex',
          gridTemplateAreas: gridTemplate
        }
      }>
        {
          children
        }
      </InternalBody>
    </BigBody>
  );
}

export default Scene;