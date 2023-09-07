import { useContext, useEffect } from 'react';
import { GLContext } from '../components/ContextHandler';
import { GroceryList, Store } from '../types/types';
import { OutstandingItems, PurchasedItems } from '../utils/Filter';

interface useStoresResponse {
  loadAllStores: () => void;
  filterByStore: ( store?: Store | null, purchased?: boolean | null ) => GroceryList;
  standardizeName: ( storeName: string ) => string;
}

function useStores(): useStoresResponse {
  const {context, storeContext, setStoreContext, setContext} = useContext( GLContext );

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

    const tempContext = context;

    tempContext.ListItems?.map( ( value ) => {

      const standardizedStore = standardizeName( value.store );
      const storeExists = tempStores.find( ( store ) => { return ( store?.value === standardizedStore ); } );

      if ( !storeExists ) {
        tempStores.push( {value: standardizedStore, display: value.store} );
      }
      else {
        value.store = storeExists.display;
      }

    } );
    setStoreContext( {stores: tempStores} );
    setContext( tempContext );

    return ;
  };

  const filterByStore = ( store?: Store | null | undefined, purchased?: boolean | null | undefined ): GroceryList => {
    let groceryList: GroceryList;
    if ( purchased !== null && purchased !== undefined ) {
      groceryList = purchased ? PurchasedItems( context ) : OutstandingItems( context );
    }
    else {
      groceryList = context;
    }

    if ( store !== null && store !== undefined ) {
      groceryList = { ListItems: groceryList.ListItems.filter( item => standardizeName( item.store ) === store.value ) };
    }

    return groceryList;
  }; 

  return ( {
    loadAllStores,
    filterByStore,
    standardizeName
  } );
}

export default useStores;