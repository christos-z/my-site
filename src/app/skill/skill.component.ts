import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SkillService } from 'services/skills/skill.service';
import { Skill } from 'services/skills/skill';

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

  constructor(activatedRoute: ActivatedRoute) {
    super(activatedRoute);
  }
  ngOnInit(): void {
    super.getSkill();
  }
}

@Component({
  selector: 'skillSideMenu',
  templateUrl: './skill-side-menu.component.html',
  styleUrls: ['./scss/skill.scss'],
})

export class SkillSideMenuComponent extends SkillComponent implements OnInit {

  private skillsFromApi: Observable<Skill[]>;

  constructor(private skillService: SkillService, activatedRoute: ActivatedRoute) {
    super(activatedRoute);
  }
  ngOnInit(): void {
    this.skillsFromApi = this.skillService.getSkills();
    console.log(this.skillsFromApi);
  }
}