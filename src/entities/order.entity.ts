import { Collection, Entity, IntegerType, ManyToOne, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import {v4 as uuidv4} from "uuid";
import { OrderItem } from "./order-item.entity";
import { Restaurant } from "./restaurant.entity";

@Entity()
export class Order {
  @PrimaryKey({ type: 'uuid' })
  id = uuidv4();

  @Property({ type: IntegerType })
  price!: number;

  @ManyToOne()
  restaurant!: Restaurant;

  @OneToMany({entity: () => OrderItem, mappedBy: 'order'})
  items = new Collection<OrderItem>(this);

  @Property({ nullable: true })
  deletedAt?: Date;
};
