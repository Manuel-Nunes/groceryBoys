import {
  useContext
} from 'react';

import {
  GLContext
} from './ContextHandler';

import '../global.css';
import { useNavigate } from 'react-router-dom';
import { LoadGroceryListFile } from '../utils/FileUtils';

export function LoadFile () {
  const navigate = useNavigate();

  const { setContext } = useContext( GLContext );

  const getFile = async ()=>{

    const data = await LoadGroceryListFile();

    if ( !data ) {

      return;
    }

    setContext( data );
    navigate( '/list' );
  };

  return (
    <button className={'DefaultButton'} onClick={getFile}>Load File</button>
  );
}
