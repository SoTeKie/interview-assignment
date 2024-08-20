export class CreateOrderDto {
  restaurantId: string;
  items: Item[];
}

export class Item {
  id: string;
  quantity: number;
}
