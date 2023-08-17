import { useContext } from 'react';
import { GLContext } from './ContextHandler';
import { AllData } from '../types/types';
import '../global.css';

export function LoadFile (){

  const pickerOpts = {
    types: [
      {
        description: 'Grocery Boys File',
        accept: {
          'text/gbs': ['.gbs'],
        },
      },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
  };

  const { setContext } = useContext(GLContext);

  const getFile = async ()=>{
    const [handle] = await window.showOpenFilePicker(pickerOpts);
    const file = await handle.getFile();
    const content: AllData = JSON.parse(await file.text()) ;
    setContext(content);
  };

  return (
    <button className={'DefaultButton'} onClick={getFile}>Awe gamer</button>
  );
}
