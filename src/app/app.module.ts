import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LocationListComponent } from './components/location-list/location-list.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { LocationItemComponent } from './components/location-item/location-item.component';

@NgModule({
  declarations: [
    AppComponent,  
    LocationListComponent,
    NavMenuComponent,
    LocationItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
