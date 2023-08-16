
import { useContext } from 'react';
import { GLContext } from './ContextHandler';

export const OnclickChange = () => {
  const {setContext} = useContext(GLContext);

  return (
    <>
      <button onClick={()=>{
        setContext({Value: 9});
      }}>

        Click Me
      </button>
    </>
  );
};