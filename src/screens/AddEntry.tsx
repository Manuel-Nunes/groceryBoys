import { ChangeEvent, useContext, useState } from 'react';
import { GLContext } from '../components/ContextHandler';
import { ListItem } from '../models/ListItem';
import { useNavigate } from 'react-router-dom';
import { GroceryList } from '../types/types';


export default function AddEntryPage() {
  const {storeContext, context, setContext} = useContext( GLContext );
  const [showOption, setShowOption] = useState( false );
  const [state, setState] = useState( {
    item: '',
    quantity: '',
    price: '',
    name: ''
  } );

  const navigate = useNavigate();
  const addEntry = ( item: string, quantity: number, price: number, store: string ) => {
    const entry: ListItem = new ListItem( {description:item, quantity:quantity, store:store, price:price, purchased:0} );
    const data: GroceryList = { ...context };
    data.ListItems.push( entry );
    setContext( data );
  };


  const storeOptions = storeContext.stores
    .map( value => value?.value )
    .filter( value => value === null )
    .map( display => <option value={display} key={display}>{display}</option> );
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
    setState( { ...state, ['name']: value } );
  };

  const onSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    addEntry( state.item, +state.quantity, +state.price, state.name );
    navigate( '/' );
  };

  return (
    <section>
      <h1>Add Item Details</h1>
      <form onSubmit={onSubmit}>
        <label>Item Name:
          <input type="text" id="item" name="item" onChange={onFieldChange} required/>
        </label>
        <label>Quantity:
          <input type="number" id="quantity" name="quantity" min="1" value='1' onChange={onFieldChange}/>
        </label>
        <label>Price:
          <input type="number" id="price" name="price" min="0" value='1' onChange={onFieldChange}/>
        </label>
        <label>Store Name:
          <select name="store" onChange={onOptionChange} required>
            {storeOptions}
          </select>
          { showOption || storeOptions.length === 1 ? <input type="text" id="name" name="name" onChange={onFieldChange} required/> : ( '' )}
        </label>
        <button type="submit" className='DefaultButton'>Add Item</button>
      </form>
    </section>
  );

}