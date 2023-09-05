import { ChangeEvent, useContext, useState } from 'react';
import { GLContext } from '../components/ContextHandler';
import { ListItem } from '../models/ListItem';
import { AllData } from '../types/types';
import { useNavigate } from 'react-router-dom';


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
    const data: AllData = { ...context };
    data.GroceryList.ListItems.push( entry );
    setContext( data );
  };

  const storeOptions = storeContext.stores
    .map( value => value.value )
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
        <label>Item Name:</label>
        <input type="text" id="item" name="item" onChange={onFieldChange} required/>
        <br/>
        <label>Quantity:</label>
        <input type="number" id="quantity" name="quantity" min="1" value='1' onChange={onFieldChange}/>
        <br/>
        <label>Price:</label>
        <input type="number" id="price" name="price" min="0" value='1' onChange={onFieldChange}/>
        <br/>
        <label>Store Name</label>
        <select name="store" onChange={onOptionChange} required>
          {storeOptions}
        </select>
        {showOption ? <input type="text" id="name" name="name" onChange={onFieldChange} required/> : ( '' )}
        <br/>
        <button type="submit">Add Item</button>
      </form>
    </section>
  );

}