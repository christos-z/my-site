import {Injectable}    from '@angular/core';
import {Http} from '@angular/http';

import {Observable}        from 'rxjs/Observable';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

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

    .map(response => <Skill[]>response.json().data as Skill[])

    
    .map( (skills) => {
      
      return skills.map(skill => {

        // skill.thisWillFail = 'this will fail';

        if (skill.experienceYears >= 15) {
          skill.rank = 'platinum'
        } else if (skill.experienceYears >= 10) {
          skill.rank = 'gold'
        } else if (skill.experienceYears >= 5) {
          skill.rank = 'silver'
        } else {
          skill.rank = 'bronze'
        }

        
        return skill
      })
    });
  }
}