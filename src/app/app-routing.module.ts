import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [
  { path: 'pokemon', component: PokemonComponent },
  { path: 'item', component: ItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
