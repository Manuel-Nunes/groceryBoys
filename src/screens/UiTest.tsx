import { useContext } from 'react';
import ListItemDisplay from '../components/ListItemDisplay';
import Scene from '../components/Scene';
import { GLContext } from '../components/ContextHandler';
import { LoadFile } from '../components/LoadFile';
import useGetStoreNames from '../hooks/useGetStoreNames';

function UiTest() {
  const {context,setContext} = useContext( GLContext );
  const storeNames = useGetStoreNames();

  return (
    <Scene>
      {
        context.GroceryList.ListItems.map( ( value, index )=>{
          return <ListItemDisplay 
            key={index}
            listData={value}
            increaseClick={ ()=>{
              const temp = {...context};
              temp.GroceryList.ListItems[index].quantity++;
              setContext( temp );
            }} />;
        } )
      }
      
      <LoadFile/>
      {
        storeNames.map( ( value,index ): JSX.Element=>{
          return (
            <p key={ 'disp'+index}>
              { value }
            </p>
          );
        } )
      }
    </Scene>
  );
}

export default UiTest;