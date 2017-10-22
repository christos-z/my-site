import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { SkillService } from 'services/skills/skill.service';
import { Skill } from 'services/skills/skill';

import { PlacesWorkedService } from 'services/places-worked/places-worked.service';
import { PlaceWorked } from 'services/places-worked/place-worked';

@Injectable()
export class SkillResolver implements Resolve<any> {
  constructor(private skillService: SkillService,
    private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Skill> {
    this.skillService.getSkill(route.params['skill-id']).subscribe(skill => {
      if(skill == undefined) {
        this.router.navigate(['skills'])
      }
    });
    return this.skillService.getSkill(route.params['skill-id']);
  }
}

@Injectable()
export class WorkResolver implements Resolve<any> {
  constructor(private placesWorkedService: PlacesWorkedService,
              private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<PlaceWorked> {
    this.placesWorkedService.getPlaceWorked(route.params['work-id']).subscribe(work => {
      if(!work) {
        this.router.navigate(['/'])
      }
    });
    return this.placesWorkedService.getPlaceWorked(route.params['work-id']);
  }
}
