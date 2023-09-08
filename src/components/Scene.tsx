import styled from 'styled-components';

const BigBody = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 8px);
  width: calc(100vw - 8px);
  max-width: 100vw;
  background-color: var(--regularBackgroundColor);
  color: var(--fontColor);
  margin: 4px;
  align-items: center;
`;

const InternalBody = styled.div`
  min-height: calc(100vh - 8px);
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 780px) {
    max-width: 1000px;
  }
`;

interface SceneProps {
  gridTemplate?: string;
}

function Scene(
  {
    children,
    gridTemplate
  }: React.PropsWithChildren<SceneProps>
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
