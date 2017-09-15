import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import {Test} from './test';

@Injectable()
export class TestService {
  
  // Define the API endpoint url
  private apiUrl = 'api/tests';
  
  constructor(private http: Http) {}
  
  getTests(): Observable<Test[]> {
    
    // Grab the skills from the API endpoint.
    return this.http.get(this.apiUrl)
    
    // Map the JSON response into a Test[] Observable.
    .map( tests => <Test[]>tests.json().data as Test[])
      
    .map( tests => {
      return tests.map(test => {
        return <Test> new Test(test)
      })
    })
  }
  
  getTest(id: string): Observable<Test> {
    return this.getTests()
    .map(skills => skills.find(skill => skill.company === id));
  }
  
}