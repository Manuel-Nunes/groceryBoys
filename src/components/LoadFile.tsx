import {
  useContext, useRef 
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

  const input = useRef<HTMLInputElement>( null );

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
      console.log( input );
      const file = input.current?.files?.[0];
      console.log( file );
      let content: GroceryList = {ListItems: []};
      if ( file !== undefined ) {
        content = JSON.parse( await file.text() ) ;
      }
      setStoreContext( {stores: [ null ]} );
      setContext( content ); 
      navigate( '/list' );
    } catch ( error ) {
      console.log( 'No List Selected',error );
    }
  };

  return (
    <>
      <input ref={input} className={'DefaultButton'} id='file' type='file'/>
      <button className={'DefaultButton'} onClick={getFile}>Submit</button>
    </>
  );
}
