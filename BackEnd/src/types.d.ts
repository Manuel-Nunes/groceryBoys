export interface User {
  UsersID: number,
  UserEmail: string,
  Friends: number[]
}

export interface Item{
  discription: string,
  quantity: number,
  shop: string,
  price: number,
  wasBought: boolean
}

export interface GroceryList {
  Owner: number,
  SharedTo: number[],
  Items: Item[]
}
