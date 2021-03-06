// hobby.model.ts

import { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Schema()
export class Hobby {
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;
}

export type HobbyDocument = Hobby & Document;

export const HobbySchema = SchemaFactory.createForClass(Hobby);