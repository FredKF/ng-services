import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationListComponent } from './components/location-list/location-list.component';

const routes: Routes = [
  {path: 'characters', loadChildren:()=>import('./modules/character/character.module').then(m => m.CharacterModule)},//cuando haya una peticion a characters se carga el modulo (lazyloading)
  {path:'locations', component: LocationListComponent},
  {path:'', redirectTo:'characters', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
