import {Injectable}    from '@angular/core';
import {Http} from '@angular/http';

import {Observable}        from 'rxjs/Observable';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Skill, SkillClass} from './skill';


@Injectable()
export class SkillService {
  
  private skillsUrl = 'api/skills';
  
  private sort = {
    sort: "experienceYears",
    by: "desc"
  }



  constructor(private http: Http) {}

  getSkills(): Observable<Skill> {
    return this.http.get(this.skillsUrl)

    .map(response => new SkillClass(response.json().data[0]))
    // .map(response => response.json().data)

    // .map((skills) => skills.sort((a, b) => {
    //   return a[this.sort.sort] > b[this.sort.sort] ? -1 : 1;
    // }))
    
    // .map( (skills) => {
      
    //   return skills.map(skill => {

    //     if (skill.experienceYears >= 15) {
    //       skill.rank = 'platinum'
    //     } else if (skill.experienceYears >= 10) {
    //       skill.rank = 'gold'
    //     } else if (skill.experienceYears >= 5) {
    //       skill.rank = 'silver'
    //     } else {
    //       skill.rank = 'bronze'
    //     }

    //     // skill.thisWillFail = 'this will fail';
        
    //     return <Skill>skill
    //   })
    // })
  }
}

