import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Skill } from 'services/skills/skill';
import { SkillService } from 'services/skills/skill.service';
@Component({
  selector: 'skill',
  templateUrl: './skill.component.html'
})

export class SkillComponent {
  public skill: Observable<Skill[]>;
  
  constructor(private activatedRoute: ActivatedRoute) {} 
  
  getSkill(): void {
    this.skill = this.activatedRoute.snapshot.data['skill'];
  }
}

@Component({
  selector: 'skillCard',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./scss/skill.scss'],
})

export class SkillCardComponent extends SkillComponent implements OnInit {

  ngOnInit(): void {
    super.getSkill();
  }
}

@Component({
  selector: 'skillSideMenu',
  templateUrl: './skill-side-menu.component.html',
  styleUrls: ['./scss/skill.scss'],
})


export class SkillSideMenuComponent extends SkillComponent {
  
private skillsFromApi: Observable<Skill[]>;

  constructor(activatedRoute: ActivatedRoute, private skillService: SkillService) {
    super(activatedRoute);
  }

  ngOnInit(): void {
    this.skillsFromApi = this.skillService.getSkills();
  }
}