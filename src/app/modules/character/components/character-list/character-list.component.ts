import { AfterContentInit, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { CharacterResponse } from 'src/app/models/character-response.interface';
import { CharacterService } from '../../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit, OnDestroy, DoCheck, AfterContentInit, AfterViewInit {
  //se puede hacer de las dos formas
  // characters: Character[] = [];
  //el signo de $ solo se pone para identificarlo como observable
  characters$: Observable<CharacterResponse>;
  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characters$ = this.characterService.getCharacters();
  }
  ngAfterContentInit(): void{
    console.log('AfterInit');
  }

  ngAfterViewInit(): void{
    console.log('AfterViewInit');
  }

  //para cuando hay cambios
  ngDoCheck(): void{
    console.log('DoCheck');
  }

  ngOnDestroy(): void{
    console.log('onDestroy');
  }

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
}