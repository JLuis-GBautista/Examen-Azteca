import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from './entities/pokemon.entity';
import { Model } from 'mongoose';
import axios from 'axios';

@Injectable()
export class PokemonService {
  constructor(
    @InjectModel(Pokemon.name) private pokemonModel: Model<Pokemon>,
  ) {}

  async getPokemonsFromPokeAPI() {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const pokemons: Pokemon[] = res.data.results;
    console.log(pokemons);
    return await this.pokemonModel.create(pokemons);
  }

  async getPokemon(name: string) {
    const pokemon = await this.pokemonModel.findOne({ name });
    if (!pokemon)
      throw new HttpException(
        'No existe el pokemon o no esta registrado',
        HttpStatus.NOT_FOUND,
      );
    return pokemon;
  }

  async findAll() {
    return await this.pokemonModel.find();
  }
}
