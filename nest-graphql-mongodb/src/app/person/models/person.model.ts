// person.model.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

import { Hobby } from '../../hobby/models/hobby.model';

@ObjectType()
@Schema()
export class Person {
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => [String]) 
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Hobby.name })
  hobbies: MongooseSchema.Types.ObjectId[];
//   @Prop()
//   hobbies: Hobby[];
}

export type PersonDocument = Person & Document;

export const PersonSchema = SchemaFactory.createForClass(Person);