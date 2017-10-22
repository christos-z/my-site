import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import  { PlaceWorked } from './place-worked';

@Injectable()
export class PlacesWorkedService {
  
  // Define the API endpoint url
  private apiUrl = 'api/placesWorked';
  
  constructor(private http: Http) {}
  
  getPlacesWorked(): Observable<PlaceWorked[]> {
    
    // Grab the skills from the API endpoint.
    return this.http.get(this.apiUrl)
    
    // Map the JSON response into a Test[] Observable.
    .map( placesWorked => <PlaceWorked[]>placesWorked.json().data as PlaceWorked[])
      
    .map( placesWorked => {
      return placesWorked.map(placeWorked => {
        return <PlaceWorked> new PlaceWorked(placeWorked)
      })
    })
  }
  
  getPlaceWorked(id: string): Observable<PlaceWorked> {
    return this.getPlacesWorked()
    .map(skills => skills.find(skill => skill.company === id));
  }
  
}