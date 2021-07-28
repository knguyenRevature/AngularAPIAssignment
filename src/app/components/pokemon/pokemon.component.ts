import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonHttpService } from 'src/app/services/pokemon-http.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private pokemonHttp: PokemonHttpService) { }

  ngOnInit(): void {
  }

  randPokemon!: Pokemon;
  pokemonSpriteURL!: string;

  displayPokemon() {
    this.pokemonHttp.getPokemon().subscribe(
      (response) => {
        console.log(response);
        this.randPokemon = response;
        this.pokemonSpriteURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.randPokemon.id}.png`;

        console.log(this.randPokemon.name);
        console.log(this.randPokemon.id);
        console.log(this.pokemonSpriteURL);
      }
    )
  }
}
