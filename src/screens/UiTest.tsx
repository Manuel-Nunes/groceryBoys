import { useContext } from 'react';
import ListItemDisplay from '../components/ListItemDisplay';
import Scene from '../components/Scene';
import { GLContext } from '../components/ContextHandler'
import { LoadFile } from '../components/LoadFile';

function UiTest() {
  const {context,setContext} = useContext( GLContext )
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
            }} />
        } )
      }
      
      <LoadFile/>

    </Scene>
  );
}

export default UiTest;