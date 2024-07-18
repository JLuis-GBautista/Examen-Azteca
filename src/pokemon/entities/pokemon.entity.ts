import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Pokemon {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  url: string;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
