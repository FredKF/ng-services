import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationResponse } from '../models/location-response.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient ) { }

  getLocations(): Observable<LocationResponse> {
    return this.http.get<LocationResponse>('https://rickandmortyapi.com/api/location');
  }
}
