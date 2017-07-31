import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { SkillService } from 'services/skills/skill.service';
import { Skill } from 'services/skills/skill';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'skill',
  providers: [SkillService],
  templateUrl: './skill.component.html',
})

export class SkillComponent implements OnInit {
  private skill: Observable<Skill>;
  
  constructor(private activatedRoute: ActivatedRoute,
  private skillService: SkillService) {} 
  
  ngOnInit(): void {
    
    this.activatedRoute.params
    .subscribe(params => {
      this.skill = this.skillService.getSkill(params['skill-id'])
    })
        
  }
}
