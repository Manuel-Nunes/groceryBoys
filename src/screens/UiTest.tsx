import { useContext } from 'react';

import ListItemDisplay from '../components/ListItemDisplay';
import Scene from '../components/Scene';
import { GLContext } from '../components/ContextHandler';
import { LoadFile } from '../components/LoadFile';
import { StoreTab } from '../components/StoreTab';
import useStores from '../hooks/useStores';

function UiTest() {
  const { context, setContext, storeContext} = useContext( GLContext );
  const { loadAllStores } = useStores();

  return (
    <Scene>
      {
        context.GroceryList.ListItems.map( ( value, index )=>{
          return <ListItemDisplay 
            key={index}
            listData={value}
            increaseClick={ ()=>{
              const temp = {...context};
              if ( temp.GroceryList.ListItems[index].purchased < temp.GroceryList.ListItems[index].quantity )
              {
                temp.GroceryList.ListItems[index].purchased++;
                setContext( temp );
              }
            }}

            decreaseClick={ ()=>{
              const temp = {...context};
              temp.GroceryList.ListItems[index].purchased--;
              setContext( temp );
            }}

          />;
        } )
      }
      
      {
        storeContext.stores.map( ( value,index )=>{
          return <StoreTab
            key={`disp${ index }`}
            {...value}/>;
        } )
      }
      
      <LoadFile/>
      
    </Scene>
  );
}

export default UiTest;