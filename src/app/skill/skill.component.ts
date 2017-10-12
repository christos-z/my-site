import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skill } from 'services/skills/skill';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./scss/my-skills.scss'],

})
export class SkillComponent implements OnInit {
  private skill: Observable<Skill[]>;
  
  constructor(private activatedRoute: ActivatedRoute) {} 
  
  ngOnInit(): void {
    this.skill = this.activatedRoute.snapshot.data['skill'];
    console.log(this.skill);
  }
}