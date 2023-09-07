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
import { useNavigate } from 'react-router-dom';

export function LoadFile () {
  const navigate = useNavigate();

  const pickerOpts = {
    types: [
      {
        description: 'Text File',
        accept: {
          'text/gbs': [
            '.txt'
          ],
        },
      },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
  };

  const { setContext, setStoreContext } = useContext( GLContext );

  const getFile = async ()=>{
    try {
      const [
        handle
      ] = await window.showOpenFilePicker( pickerOpts );
      const file = await handle.getFile();
      const content: GroceryList = JSON.parse( await file.text() ) ;
      setStoreContext( {stores: [ null ]} );
      setContext( content ); 
      navigate( '/list' );
    } catch ( error ) {
      console.log( 'No List Selected',error );
    }
  };

  return (
    <button className={'DefaultButton'} onClick={getFile}>Load File</button>
  );
}
