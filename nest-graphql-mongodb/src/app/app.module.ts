import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PersonModule } from './person/person.module';
import { HobbyModule } from './hobby/hobby.module';


@Module({
  // "mongodb://localhost:27017/three-in-one-db" is the connection string to the project db

  imports: [
    MongooseModule.forRoot('mongodb://admin:adminpassword@localhost:27017/three-in-one-db?authSource=admin&w=1'), // ,{ useNewUrlParser: true }
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
      debug: false,
    }),
    PersonModule,
    HobbyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
