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
        context.ListItems.map( ( value, index )=>{
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