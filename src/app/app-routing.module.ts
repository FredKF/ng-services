import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { LocationListComponent } from './components/location-list/location-list.component';

const routes: Routes = [
  {path:'characters', component: CharacterListComponent},
  {path:'locations', component: LocationListComponent},
  {path:'', redirectTo:'characters', pathMatch:'full'},
  {path:'character/:id', component: CharacterDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
