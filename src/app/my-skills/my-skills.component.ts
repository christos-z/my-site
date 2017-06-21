import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Skill }                from 'services/skill';
import { SkillService }         from 'services/skill.service';

@Component({
  selector: 'my-skills',
  providers: [SkillService],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./scss/bootstrap.scss']
})
export class MySkillsComponent implements OnInit {

  skills: Skill;

  constructor(private sanitizer: DomSanitizer,
              private skillService: SkillService) {

  }

  getSkills(): void {
    this.skillService
        .getSkills()
        .subscribe(skills => this.skills = skills) 
  }

  ngOnInit() {
    this.getSkills();
  }

}