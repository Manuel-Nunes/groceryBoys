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

import {
  useNavigate
} from 'react-router-dom';

import {
  UtilBar
} from '../components/UtilBar';

import {
  styled
} from 'styled-components';

import Scene from '../components/Scene';
import useStores from '../hooks/useStores';
import ListItemDisplay from '../components/ListItemDisplay';

function UiTest() {
  const { context, setContext, storeContext} = useContext( GLContext );
  const { filterByStore } = useStores();

  const [store, setStore]= useState<Store | null>();
  const [purchased, setPurchased] = useState<boolean | null>();

  const List = filterByStore( store, purchased );
  const navigate = useNavigate();

  return (
    <Scene>

      <UtilBar/>

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


      <LoadFile/>

    </Scene>
  );
}

const AddItem = styled.a`
  text-align: center;
  max-width: 100vw;
  width: calc(100% - 4px);
  background: #1BFD9CCC;
  border: 2px solid white;
  border-radius: 4px;
  padding: 8px 0;
`;

export default UiTest;
