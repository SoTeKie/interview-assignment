import { Entity, IntegerType, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import {v4 as uuidv4} from "uuid";
import { Restaurant } from "./restaurant.entity";

@Entity()
export class Item {
  @PrimaryKey({ type: 'uuid' })
  id = uuidv4();

  @Property({ type: IntegerType })
  price!: number;

  @Property()
  name!: string;

  @ManyToOne()
  restaurant!: Restaurant;
}

