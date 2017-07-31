import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import {Skill} from './skill';

@Injectable()
export class SkillService {
  
  // Define the API endpoint url
  private skillsUrl = 'api/skills';
  
  // Default sort object.
  private sort = {
    sort: "experienceYears",
    direction: "desc"
  }
  
  constructor(private http: Http) {}
  
  getSkills(): Observable<Skill[]> {
    
    // Grab the skills from the API endpoint.
    return this.http.get(this.skillsUrl)
    
    // Map the JSON response into a Skill[] Observable.
    .map( skils => <Skill[]>skils.json().data as Skill[])
    
    // Apply default sort on Skills array
    .map( skills => skills.sort((firstArray, secondArray) => {
      firstArray = new Skill(firstArray)
      return firstArray[this.sort.sort] > secondArray[this.sort.sort] 
      ? this.sort.direction === 'desc' ? -1 : 1 
      : this.sort.direction === 'desc' ? 1 : -1
    }))
    
    .map( skills => {
      return skills.map(skill => {
        return <Skill> new Skill(skill)
      })
    })
  }
  
  getSkill(id: string): Observable<Skill> {
    return this.getSkills()
    .map(skills => skills.find(skill => skill.name === id));
  }
  
}