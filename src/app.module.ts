import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Migrator } from '@mikro-orm/migrations';

@Module({
  imports: [
    OrdersModule,
    MikroOrmModule.forRoot({
      entities: ['./dist/entities'],
      entitiesTs: ['./src/entities'],
      dbName: 'objedname',
      port: 5432,
      user: 'admin',
      password: 'admin',
      extensions: [Migrator],
      driver: PostgreSqlDriver,
    }),
  ],
})
export class AppModule {}
