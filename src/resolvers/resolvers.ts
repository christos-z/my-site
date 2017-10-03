import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { SkillService } from 'services/skills/skill.service';
import { Skill } from 'services/skills/skill';

@Injectable()
export class SkillResolver implements Resolve<any> {
  constructor(private skillService: SkillService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Skill> {
    return this.skillService.getSkill(route.params['skill-id']);
  }
}
