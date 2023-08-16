interface ListData {
  description: string;
  quantity: number;
  store: string;
  price: number;
  purchased: boolean;
}

export class ListItem {
  description: string;
  quantity: number;
  store: string;
  price: number;
  purchased: boolean;

  constructor(data: ListData) {
    this.description = data.description;
    this.quantity = data.quantity;
    this.store = data.store;
    this.price = data.price;
    this.purchased = data.purchased;
  }
}