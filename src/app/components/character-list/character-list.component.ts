import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResponse } from 'src/app/models/character-response.interface';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  //se puede hacer de las dos formas
  // characters: Character[] = [];
  //el signo de $ solo se pone para identificarlo como observable
  characters$: Observable<CharacterResponse>;
  constructor(private characterService: CharacterService ) { }

  // ngOnInit(): void {
  //   console.log('inicializado ok');
  //   this.characterService.getCharacters().subscribe(
  //   (res) => {
  //     this.characters = res.results;
  //   },
  //   (error) =>{
  //     console.error(error)
  //   });
  // }
  
  ngOnInit(): void {
    this.characters$ = this.characterService.getCharacters();
  }
}