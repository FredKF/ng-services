import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css']
})
export class CharacterItemComponent {
  @Input()
  character: Character;  
  constructor() { }
}
