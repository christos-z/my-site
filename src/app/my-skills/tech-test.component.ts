import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Skill }                from 'services/skill';
import { SkillService }         from 'services/skill.service';

@Component({
  selector: 'my-skills',
  providers: [SkillService],
  templateUrl: './tech-test.component.html',
  styleUrls: ['./scss/bootstrap.scss']
})
export class MySkillsComponent implements OnInit {

  skills: Skill[];

  constructor(private sanitizer: DomSanitizer,
              private heroService: SkillService) {

  }

  getHeroes(): void {
    this.heroService
        .getHeroes()
        .then(skills => this.skills = skills)
        .then(() => this.skills[0].img = this.sanitizer.bypassSecurityTrustUrl(this.skills[0].img));

  }

  ngOnInit() {
    this.getHeroes();
  }

}
