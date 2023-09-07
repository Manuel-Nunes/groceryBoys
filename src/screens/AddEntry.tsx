import { ChangeEvent, useContext, useState } from 'react';
import { GLContext } from '../components/ContextHandler';
import { ListItem } from '../models/ListItem';
import { useNavigate } from 'react-router-dom';
import { GroceryList } from '../types/types';
import { UtilBar } from '../components/UtilBar';
import Scene from '../components/Scene';
import { styled } from 'styled-components';


export default function AddEntryPage() {
  const {storeContext, context, setContext} = useContext( GLContext );
  const [showOption, setShowOption] = useState( false );
  const [state, setState] = useState<ListItem>( {
    description: '',
    quantity: 1,
    price: 1,
    store: '',
    purchased: 0
  } );

  const navigate = useNavigate();
  const addEntry = ( item: string, quantity: number, price: number, store: string ) => {
    const entry: ListItem = new ListItem( {description:item, quantity:quantity, store:store, price:price, purchased:0} );
    const data: GroceryList = { ...context };
    data.ListItems.push( entry );
    setContext( data );
  };


  const storeOptions = storeContext.stores
    .filter( store => store?.value !== null )
    .map( store => <option value={store?.display} key={store?.value}>{store?.display}</option> );
  storeOptions.push( <option value="other" key="other">Other</option> );

  const onFieldChange = ( event: ChangeEvent<HTMLInputElement> ) => {
    const value: typeof state[keyof typeof state] = event.target.value;
    setState( { ...state, [event.target.id]: value } );
  };

  const onOptionChange = ( event: ChangeEvent<HTMLSelectElement> ) => {
    const value: typeof state[keyof typeof state] = event.target.value;
    if ( event.target.value == 'other' ) {
      setShowOption( true );
    } else {
      setShowOption( false );
    }
    setState( { ...state, ['store']: value } );
  };

  const onSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    addEntry( state.description, state.quantity, state.price, state.store );
    navigate( -1 );
  };

  return (
    <Scene>

      <UtilBar/>

      <FormSection>
        <h1>Add Item Details</h1>
        <form onSubmit={onSubmit}>
          <label>Item Name:
            <input type="text" id="description" name="description" onChange={onFieldChange} required/>
          </label>
          <label>Quantity:
            <input type="number" id="quantity" name="quantity" min="1" value={state.quantity} onChange={onFieldChange}/>
          </label>
          <label>Price:
            <input type="number" id="price" name="price" min="0" value={state.price} onChange={onFieldChange}/>
          </label>
          <label>Store Name:
            <select name="store" onChange={onOptionChange} required>
              {storeOptions}
            </select>
            { showOption || storeOptions.length === 1 ? <input type="text" id="store" name="store" onChange={onFieldChange} required/> : ( '' )}
          </label>
          <button type="submit" className='DefaultButton'>Add Item</button>
        </form>
      </FormSection>
    </Scene>
  );

}

const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100%;
  margin: auto;
`;