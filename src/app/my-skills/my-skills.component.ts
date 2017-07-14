import { Component, OnInit } from '@angular/core';
import { Skill } from 'services/skills/skill';
import { SkillService } from 'services/skills/skill.service';


import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'my-skills',
  providers: [SkillService],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./scss/my-skills.scss']
})


export class MySkillsComponent implements OnInit {
  
  private filteredSkills: Observable<Skill[]>;
  private skills: Observable<Skill[]>;
  
  private searchTerms = new BehaviorSubject<string>('');
   
  constructor(private skillService: SkillService) {}
  
  // Retrieve the list of skills from the API (run on ngInit)
  getSkills(): void {   
    this.skills = this.skillService.getSkills();
  }
  
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);     
  }
  
  filterSkills(): void {
    
    this.filteredSkills = this.searchTerms
    .debounceTime(300)        
    .distinctUntilChanged()   
    .switchMap( term => {

      // If there is no search value, we return the entire skill list
      return term.length === 0   
      
      ? this.skills

      // Otherwise we filter the skills
      : this.skills
      .map( (skills) => {
        return skills.filter(skill => {
          if(!skill.name.toLowerCase().indexOf(term.toLowerCase())) {
            return <Skill> new Skill(skill)
          }
        })
      })
    } )
    .catch(error => {
      // TODO: add real error handling
      console.log(error);
      return Observable.of<Skill[]>([]);
    });
  }
  
  ngOnInit(): void {
    
    this.getSkills();
    this.filterSkills()
    
  }
}
