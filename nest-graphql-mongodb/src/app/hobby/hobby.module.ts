import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Hobby, HobbySchema } from './models/hobby.model';
import { HobbyService } from './hobby.service';
import { HobbyResolver } from './resolvers/hobby.resolver';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hobby.name, schema: HobbySchema }]),
  ],
  providers: [HobbyService, HobbyResolver],
})
export class HobbyModule {}
