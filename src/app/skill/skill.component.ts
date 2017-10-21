import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Skill } from 'services/skills/skill';
import { SkillService } from 'services/skills/skill.service';
@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styles: [
    `:host { 
      display: flex;
    }`
  ]
})

export class SkillComponent {
  public skill: Skill;

  constructor(private skillService: SkillService,
  public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getSkill();
  }

  getSkill(): void {
    this.skill = this.activatedRoute.snapshot.data['skill'];
  }

  changeActiveSkill(event) {
    this.skillService.getSkill(event).subscribe(skill => this.skill = skill );
  }

}

@Component({
  selector: 'skillCard',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./scss/skill.scss'],
})

export class SkillCardComponent {
  @Input() skill: Skill;
}

@Component({
  selector: 'skillSideMenu',
  templateUrl: './skill-side-menu.component.html',
  styleUrls: ['./scss/skillNavbar.scss'],
})


export class SkillSideMenuComponent {
    
  @Input() currentSkill: Skill['name'];

  @Output() activeSkill: EventEmitter<Skill> = new EventEmitter<Skill>();

  private skillsFromApi: Observable<Skill[]>;

  constructor(activatedRoute: ActivatedRoute, private skillService: SkillService) {
  }

  ngOnInit(): void {
    this.skillsFromApi = this.skillService.getSkills();
  }
  setActiveSkill (skillName): void {
    this.activeSkill.emit(skillName)
  }
}