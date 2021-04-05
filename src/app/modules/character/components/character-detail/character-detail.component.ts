import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from '../../character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character$ : Observable<Character>;
  constructor(private route: ActivatedRoute, 
              private characterService : CharacterService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.character$ = this.characterService.getCharacterById(params.id)
    });
    //tambien se puede hacer console.log(this.route.snapshot.params)
  }
}
