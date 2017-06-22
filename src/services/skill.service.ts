import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';

import { Observable }        from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Skill } from './skill';

@Injectable()
export class SkillService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private skillsUrl = 'api/skills';

  constructor(private sanitizer: DomSanitizer,
              private http: Http) { }

  getSkills(): Observable<Skill>  {
    return this.http.get(this.skillsUrl)
        .map(response => response.json().data)
        .map((skills) => {
          return skills.map(skill => {
            if(skill.imgType === 'htmlSvg') {
              skill.img = this.sanitizer.bypassSecurityTrustUrl(`data:image/svg+xml;utf8,${skill.img}`);
            }
            return skill
          })
        });
  }
}
