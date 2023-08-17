import { useContext } from 'react';
import { LoadFile } from '../components/LoadFile';
import { GLContext } from '../components/ContextHandler';
import { ListData } from '../types/types';

import './App.css';
import GroceryItemDisplay from '../components/GroceryItemDisplay';
import Header from '../components/Header';
import Scene from '../components/Scene';

function App() {
  const { context } = useContext(GLContext);
  return (
    <Scene
      // gridTemplate={
      //   ` 
      //     'A A'
      //     'B B'
      //   `
      // }>
    >
      <p style={{ gridArea: 'B' }}>Hello World</p>
      <p style={{ gridArea: 'A' }}>Hello World!!!</p>
    </Scene>
  );
}

export default App;
