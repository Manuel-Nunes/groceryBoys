import { useContext } from 'react';
import { LoadFile } from '../components/LoadFile';
import './App.css';
import { GLContext } from '../components/ContextHandler';

function App() {
  const { context } = useContext(GLContext);
  return (
    <>
      <h1>CurrentContext:</h1>
      <p> { JSON.stringify(context)} </p>
      <LoadFile></LoadFile>
    </>
  );
}

export default App;
