import { useContext } from 'react';
import { GLContext } from '../components/ContextHandler';

export function standarizeName( storeName: string ): string {
  return storeName
    .replace( ' ','' )
    .trim()
    .toUpperCase();
}

function useGetStoreNames(): string[] {
  const {context} = useContext( GLContext );
  const stores:string[] = [];
  const originals: string[] = [];

  context.GroceryList.ListItems.forEach( ( value )=> {
    const standerizedStore = standarizeName( value.store );
    if ( !stores.includes( standerizedStore ) ) {
      stores.push( standerizedStore );
      originals.push( value.store );
    }
  } );

  return originals;
}

export default useGetStoreNames;