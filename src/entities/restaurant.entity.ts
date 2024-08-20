import { Collection, Entity, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { v4 as uuidv4 } from "uuid";
import { Item } from "./item.entity";

@Entity()
export class Restaurant {
  @PrimaryKey({ type: 'uuid' })
  id = uuidv4();

  @Property()
  name!: string;

  @OneToMany({entity: () => Item, mappedBy: 'restaurant' })
  items = new Collection<Item>(this);
};
