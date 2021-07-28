import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { ItemHttpService } from 'src/app/services/item-http.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private itemHttp: ItemHttpService) { }

  ngOnInit(): void {
  }

  randItem!: Item;
  itemSpriteURL!: string;

  displayItem() {
    this.itemHttp.getItem().subscribe(
      (response) => {
        console.log(response);
        this.randItem = response;
        this.itemSpriteURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${this.randItem.name}.png`;

        console.log(this.randItem.name);
        console.log(this.randItem.id);
        console.log(this.itemSpriteURL);
      }
    )
  }
}
