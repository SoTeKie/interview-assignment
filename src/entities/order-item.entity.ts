import { Entity, IntegerType, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import {v4 as uuidv4} from "uuid";
import { Order } from "./order.entity";
import { Item } from "./item.entity";

@Entity()
export class OrderItem {
  @PrimaryKey({ type: 'uuid' })
  id = uuidv4();

  @Property({ type: IntegerType })
  quantity!: number;

  @ManyToOne()
  item!: Item; 

  @ManyToOne()
  order!: Order;
}
