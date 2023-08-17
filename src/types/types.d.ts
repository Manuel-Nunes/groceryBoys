export interface ListData {
  description: string;
  quantity: number;
  store: string;
  price: number;
  purchased: number;
}

export interface GroceryList {
  ListItems: ListData[]
}

export interface AllData {
  GroceryList: GroceryList
}
