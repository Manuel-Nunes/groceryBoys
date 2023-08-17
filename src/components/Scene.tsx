import './Scene.css';
import Header from './Header';

interface SceneProps {
  children?: React.ReactNode[];
  gridTemplate?: string;
}

function Scene(props: SceneProps){
  return (
    <div id="bigBody">
      <Header></Header>
      <div id='internalBody' style={
        { 
          display: (props.gridTemplate)? 'grid': 'flex',
          gridTemplateAreas: props?.gridTemplate
        }
      }>
        {
          props.children
        }
      </div>
    </div>
  );
}

export default Scene;