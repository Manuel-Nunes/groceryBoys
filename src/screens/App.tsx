import './App.css';

import MyComponent from '../components/MyComponent';

import { ReactElement, useContext } from 'react';
import { OnclickChange } from '../components/OnclickChange';
import {GLContext } from '../components/ContextHandler';

function App() {
  const {context} = useContext(GLContext);
  
  const genComps = ()=> {
    const comps: ReactElement[] = [];
    if (context?.Value){

      for (let i = 0; i < context.Value; i++ ){
        comps.push( 
          <p key={i}> Hello wolrd</p>
        );
      }
    }
    return comps;
  };
  return (
    <>
      <p>{JSON.stringify(context)}</p>
      <MyComponent/>
      <OnclickChange></OnclickChange>
      {
        genComps()
      }
    </>
  );
}

export default App;
