import { useContext } from 'react';
import { LoadFile } from '../components/LoadFile';
import { GLContext } from '../components/ContextHandler';

import './App.css';


function App() {
  const { context } = useContext(GLContext);
  return (
    <>
      <p>
        {
          JSON.stringify(context.GroceryList.ListItems[0])
        }
      </p>
      <LoadFile/>
      <p>Hi</p>
    </>
  );
}

export default App;