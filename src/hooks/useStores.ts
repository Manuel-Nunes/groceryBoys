import { useContext, useEffect } from 'react';
import { GLContext } from '../components/ContextHandler';

interface useStoresResponse {
  loadAllStores: () => void;
  standardizeName: ( storeName: string ) => string;
}

function useStores(): useStoresResponse {
  const {context, storeContext, setStoreContext} = useContext( GLContext );

  const standardizeName = ( storeName: string ): string => {
    return storeName
      .replace( ' ','' )
      .trim()
      .toUpperCase();
  };

  useEffect( () => {
    loadAllStores();
  }, [context] );

  const loadAllStores = () => {

    const tempStores = storeContext.stores.slice();
    console.log( JSON.stringify( context.GroceryList ) );
    context.GroceryList?.ListItems?.map( ( value ) => {

      const standardizedStore = standardizeName( value.store );
      const storeExists = tempStores.find( ( store ) => { return ( store.value === standardizedStore ); } );

      if ( !storeExists ) {
        tempStores.push( {value: standardizedStore, display: value.store} );
      }

    } );
    setStoreContext( {stores: tempStores} );

    return ;
  };

  return ( {
    loadAllStores,
    standardizeName
  } );
}

export default useStores;