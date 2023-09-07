import {
  useContext,
  useState
} from 'react';

import {
  GLContext
} from '../components/ContextHandler';

import {
  LoadFile
} from '../components/LoadFile';

import {
  Tabs
} from '../components/Tabs';

import {
  Store
} from '../types/types';

import Scene from '../components/Scene';
import useStores from '../hooks/useStores';
import ListItemDisplay from '../components/ListItemDisplay';

function UiTest() {
  const { context, setContext, storeContext} = useContext( GLContext );
  const { filterByStore } = useStores();

  const [store, setStore]= useState<Store | null>();
  const [purchased, setPurchased] = useState<boolean | null>();

  const List = filterByStore( store, purchased );

  return (
    <Scene>

      <Tabs
        stores={storeContext.stores}
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
