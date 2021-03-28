import { Component, Input, OnInit } from '@angular/core';
import { Location } from 'src/app/models/location.model';

@Component({
  selector: 'app-location-item',
  templateUrl: './location-item.component.html',
  styleUrls: ['./location-item.component.css']
})
export class LocationItemComponent implements OnInit {
  @Input()
  location: Location;
  constructor() { }

  ngOnInit(): void {
  }

}
