import { Component, OnInit } from '@angular/core';
import { Skill } from 'services/skills/skill';
import { SkillService } from 'services/skills/skill.service';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'my-skills',
  providers: [SkillService],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./scss/my-skills.scss'],
})

export class MySkillsComponent implements OnInit {
      
  public sort = {
    by: "experienceYears",
    direction: "desc"
  }

  public searchObject = {
    searchTerm: '',
    sort: this.sort
  }

  private skills: Observable<Skill[]>;
  private skillsFromApi: Observable<Skill[]>;
 
  private skillSearch = new BehaviorSubject<any>(this.searchObject);

  constructor(private skillService: SkillService) {}
  
  // Retrieve the list of skills from the API (run on ngInit)
  getSkills(): void {   
    this.skillsFromApi = this.skillService.getSkills();
  }
  
  // Push a search term into the observable stream.
  search(event: Event): void {
    this.searchObject.searchTerm = (<HTMLInputElement>event.target).value;
    this.skillSearch.next(this.searchObject);     
  }
  
  sortDirection(event: Event): void {
    this.sort.direction = (<HTMLInputElement>event.target).value;
    this.skillSearch.next(this.searchObject);     
  }

  sortBy(event: Event): void {
    this.sort.by = (<HTMLInputElement>event.target).value;
    this.skillSearch.next(this.searchObject);     
  }
  
  searchSkills(): void {
    
    this.skills = this.skillSearch.mergeMap( searchObject => {
      return this.skillsFromApi
      .map( skills => {
        return skills
        .filter(skill => this.filterSkills(skill, searchObject.searchTerm))
        .sort((firstArray, secondArray) => this.sortSkills(firstArray, secondArray))
      })
    })
    .catch(error => {
      // TODO: add real error handling
      console.log(error);
      return <Skill[]>([]);
    });
    
  }

  filterSkills (skill, searchTerm) {
    if(!skill.name.toLowerCase().indexOf(searchTerm.toLowerCase())) {
      return <Skill> new Skill(skill)
    }
  }

  sortSkills (firstArray, secondArray) {
    firstArray = new Skill(firstArray)

    return firstArray[this.sort.by] > secondArray[this.sort.by] 
    ? this.sort.direction === 'desc' ? -1 : 1 
    : this.sort.direction === 'desc' ? 1 : -1
  }
  
  ngOnInit(): void {
    this.getSkills();
    this.searchSkills()
  }
}
