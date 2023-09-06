export interface ListData {
  store: string;
  description: string;
  quantity: number;
  price: number;
  purchased: number;
}

export interface Store {
  value: string;
  display: string;
}

export interface StoreContext {
  stores: ( Store | null )[];
}
export interface GroceryList {
  ListItems: ListData[]
}

export interface AllData {
  GroceryList: GroceryList
}
