import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterItemComponent } from './components/character-item/character-item.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharacterRoutingModule } from './character-routing.module';


@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterItemComponent,
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
