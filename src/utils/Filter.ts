import { GroceryList } from '../types/types';

export const PurchasedItems = ( list: GroceryList ): GroceryList => {
  return {
    ListItems: list.ListItems.filter( item => item.purchased >= item.quantity )
  };
};

export const OutstandingItems = ( list: GroceryList ): GroceryList => {
  return {
    ListItems: list.ListItems.filter( item => item.purchased < item.quantity )
  };
};