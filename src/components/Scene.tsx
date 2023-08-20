import './Scene.css'
import Header from './Header';

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
    <div id="bigBody">
      <Header></Header>
      <div id="internalBody" style={
        { 
          display: ( gridTemplate )? 'grid': 'flex',
          gridTemplateAreas: gridTemplate
        }
      }>
        {
          children
        }
      </div>
    </div>
  );
}

export default Scene;