import {
  useContext
} from 'react';

import {
  GLContext
} from './ContextHandler';

import {
  useNavigate
} from 'react-router-dom';

import {
  LoadGroceryListFile
} from '../utils/FileUtils';

import '../global.css';

export function LoadFile () {
  const navigate = useNavigate();

  const { setContext, setStoreContext } = useContext( GLContext );

  const getFile = async ()=>{

    const data = await LoadGroceryListFile();

    if ( !data ) {

      return;
    }

    setStoreContext( {stores: [ null ]} );
    setContext( data );
    navigate( '/list' );
  };

  return (
    <button className={'DefaultButton'} onClick={getFile}>Load File</button>
  );
}
