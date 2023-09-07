import { useContext, useState } from 'react';
import ListItemDisplay from '../components/ListItemDisplay';
import Scene from '../components/Scene';
import { GLContext } from '../components/ContextHandler';
import useStores from '../hooks/useStores';
import { Store } from '../types/types';
import { Tabs } from '../components/Tabs';
import { BackButton } from '../components/BackButton';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router';

function UiTest() {
  const { context, setContext, storeContext} = useContext( GLContext );
  const { filterByStore } = useStores();

  const [store, setStore]= useState<Store | null>();
  const [purchased, setPurchased] = useState<boolean | null>();

  const List = filterByStore( store, purchased );
  const navigate = useNavigate();

  return (
    <Scene>

      <AddItem
        onClick={() => navigate( '/addEntry' )}>
        Add Item
      </AddItem>

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
      
      <BackButton/>
      
    </Scene>
  );
}

const AddItem = styled.a`
  text-align: center;
  max-width: 100vw;
  width: calc(100vw - 8px);
  background: #72C100;
  border-radius: 8px;
  padding: 8px 0;
  margin: 4px;
`;
export default UiTest;