import {
  useContext 
} from 'react';
import {
  GLContext 
} from './ContextHandler';
import {
  GroceryList 
} from '../types/types';
import '../global.css';
import useStores from '../hooks/useStores';

export function LoadFile () {

  const pickerOpts = {
    types: [
      {
        description: 'Grocery Boys File',
        accept: {
          'text/gbs': [
            '.gbs'
          ],
        },
      },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
  };

  const { setContext } = useContext( GLContext );
  const { loadAllStores } = useStores();

  const getFile = async ()=>{
    try {
      const [
        handle
      ] = await window.showOpenFilePicker( pickerOpts );
      const file = await handle.getFile();
      const content: GroceryList = JSON.parse( await file.text() ) ;
      setContext( content ); 
    } catch ( error ) {
      console.log( 'No List Selected',error );
    }
  };

  return (
    <button className={'DefaultButton'} onClick={getFile}>Load FIle</button>
  );
}
