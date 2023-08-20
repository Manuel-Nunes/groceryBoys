export interface ListData {
  store: string;
  description: string;
  quantity: number;
  price: number;
  purchased: number;
}

export interface GroceryList {
  ListItems: ListData[]
}

export interface AllData {
  GroceryList: GroceryList
}
