import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonHttpService {

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<Pokemon> {
    let randomNum = Math.floor(Math.random() * 898 + 1);

    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
  }
}
