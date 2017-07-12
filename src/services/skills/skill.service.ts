import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Skill} from './skill';

@Injectable()
export class SkillService {
  
  private skillsUrl = 'api/skills';
  
  private sort = {
    sort: "experienceYears",
    by: "desc"
  }
  
  constructor(private http: Http) {}
  
  getSkills(): Observable<Skill[]> {
    return this.http.get(this.skillsUrl)
    
    .map(response => <Skill[]>response.json().data)
    
    .map( (skills) => {
      return skills.map(skill => {
        return <Skill> new Skill(skill)
      })
    })

    .map((skills) => skills.sort((firstArray, secondArray) => {
      return firstArray[this.sort.sort] > secondArray[this.sort.sort] 
      ? this.sort.by === 'desc' ? -1 : 1 
      : this.sort.by === 'desc' ? 1 : -1
    }))
  }
}