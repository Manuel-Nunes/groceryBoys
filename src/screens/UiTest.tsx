import { useContext, useState } from 'react';
import ListItemDisplay from '../components/ListItemDisplay';
import Scene from '../components/Scene';
import { GLContext } from '../components/ContextHandler';
import { LoadFile } from '../components/LoadFile';
import useStores from '../hooks/useStores';
import { Store } from '../types/types';
import { Tabs } from '../components/Tabs';

function UiTest() {
  const { context, setContext, storeContext} = useContext( GLContext );
  const { filterByStore } = useStores();

  const [store, setStore]= useState<Store | null>();
  const [purchased, setPurchased] = useState<boolean | null>();

  const List = filterByStore( store, purchased );

  return (
    <Scene>

      <Tabs
        active={store}
        stores={storeContext.stores}
        filter={purchased}
        onFilterClick={setPurchased}
        onClick={setStore}/>
      {
        List.ListItems?.map( ( value, index )=>{
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