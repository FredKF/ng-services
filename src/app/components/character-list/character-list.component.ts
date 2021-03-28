import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [];
  constructor(private characterService: CharacterService ) { }

  ngOnInit(): void {
    console.log('inicializado ok');
    this.characterService.getCharacters().subscribe(
    (res) => {
      this.characters=res.results;
    },
    (error) =>{
      console.error(error)
    });
  }
}
