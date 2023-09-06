import { useContext, useState } from 'react';
import ListItemDisplay from '../components/ListItemDisplay';
import Scene from '../components/Scene';
import { GLContext } from '../components/ContextHandler';
import { LoadFile } from '../components/LoadFile';
import { StoreTab } from '../components/StoreTab';
import useStores from '../hooks/useStores';
import { Store } from '../types/types';
import { Tabs } from '../components/Tabs';

function UiTest() {
  const { context, setContext, storeContext} = useContext( GLContext );
  const { filterByStore } = useStores();

  const [store, setStore]= useState<Store | null>();

  const List = filterByStore( store );

  return (
    <Scene>

      <Tabs
        stores={storeContext.stores}
        onClick={setStore}/>
        
      {
        List.ListItems.map( ( value, index )=>{
          return <ListItemDisplay 
            key={index}
            listData={value}
            increaseClick={ ()=>{
              const temp = {...context};
              if ( temp.ListItems[index].purchased < temp.ListItems[index].quantity )
              {
                temp.ListItems[index].purchased++;
                setContext( temp );
              }
            }}

            decreaseClick={ ()=>{
              const temp = {...context};
              temp.ListItems[index].purchased--;
              setContext( temp );
            }}

          />;
        } )
      }
      
      
      <LoadFile/>
      
    </Scene>
  );
}

export default UiTest;