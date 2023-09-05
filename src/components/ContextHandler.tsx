import React, {
  useState 
} from 'react';
import {
  Store, 
  GroceryList,
  StoreContext 
} from '../types/types';

const defaultValue:GroceryList ={
  ListItems: [
  ]
};

const defaultStores: StoreContext = {
  stores: []
};

const tempLook = {
  context: defaultValue,
  setContext: ( value: GroceryList ) => { console.warn( 'this is bad if you see this', value );},
  storeContext: defaultStores,
  setStoreContext: ( value: StoreContext ) => { console.warn( 'this is bad if you see this', value );}
};

export const GLContext = React.createContext( tempLook );

interface PropTypes {
  children?: JSX.Element | JSX.Element[]
}

export const ContextHandler: React.FC<PropTypes> = ( { children } ) =>{

  const [
    context,
    setContext
  ] = useState( defaultValue );

  const [
    storeContext,
    setStoreContext
  ] = useState( defaultStores );

  return (
    <GLContext.Provider value={{
      context,
      setContext,
      storeContext,
      setStoreContext 
    }}>
      {children}
    </GLContext.Provider>
  );
};
