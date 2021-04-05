import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/modules/character/character.service';

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
    this.route.params.subscribe(pepeparas => {
      this.character$ = this.characterService.getCharacterById(pepeparas.id)
    });
    //tambien se puede hacer console.log(this.route.snapshot.params)
  }
}
