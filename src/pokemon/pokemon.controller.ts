import { Controller, Get, Post, Param, HttpException } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  getAllPokemonsFromPokeAPI() {
    try {
      return this.pokemonService.getPokemonsFromPokeAPI();
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Get(':name')
  async getPokemon(@Param('name') name: string) {
    try {
      return await this.pokemonService.getPokemon(name);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Get()
  findAllPokemons() {
    try {
      return this.pokemonService.findAll();
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
