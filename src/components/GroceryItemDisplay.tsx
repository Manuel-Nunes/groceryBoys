import {
  ListData 
} from '../types/types';

export interface GroceryItemDisplayProptypes {
  GItem: ListData
}

const GroceryItemDisplay: React.FC<GroceryItemDisplayProptypes> = ( { GItem = null } ) => {
  return (
    <div>
      {JSON.stringify( GItem )}
    </div>
  );
};


export default GroceryItemDisplay;