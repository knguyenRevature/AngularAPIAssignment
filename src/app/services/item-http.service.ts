import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemHttpService {

  constructor(private http: HttpClient) { }

  getItem(): Observable<Item> {
    let randomNum = Math.floor(Math.random() * 954 + 1);

    return this.http.get<Item>(`https://pokeapi.co/api/v2/item/${randomNum}`);
  }
}
