import {Injectable}    from '@angular/core';
import {Headers, Http} from '@angular/http';

import {Observable}        from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import {Skill} from './skill';

@Injectable()
export class SkillService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private skillsUrl = 'api/skills';

  constructor(private http: Http) {
  }

  getSkills(): Observable<Skill> {
    return this.http.get(this.skillsUrl)
      .map(response => response.json().data)
      .map((skills) => {
        return skills.map(skill => {

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
