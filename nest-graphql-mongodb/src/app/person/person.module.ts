import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Person, PersonSchema } from './models/person.model';
import { PersonService } from './person.service';
import { PersonResolver } from './resolvers/person.resolver';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }]),
    ],
    providers: [PersonService, PersonResolver]
})
export class PersonModule {}
