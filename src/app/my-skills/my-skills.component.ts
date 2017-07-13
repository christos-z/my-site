import { Component, OnInit, ViewChildren, ElementRef, Renderer2} from '@angular/core';
import { Skill } from 'services/skills/skill';
import { SkillService } from 'services/skills/skill.service';


import { Observable }        from 'rxjs/Observable';
import { BehaviorSubject }           from 'rxjs/BehaviorSubject';

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
  
  
  //We need both the flip element and the flip container
  @ViewChildren('flipElement') flipElement;
  @ViewChildren('flipContainer') flipContainer;
  
  skills: Observable<Skill[]>;
  listOfSkills
  listOfSkills2: Observable<Skill[]>;
  private searchTerms = new BehaviorSubject<string>("");
  
  private topPos : String;
  private leftPos : String;
  
  private currentFlipContainer: any;
  private currentFlipElement: any;
  
  constructor(private renderer: Renderer2, private skillService: SkillService) {}
  
  getSkills(): void {
    // this.skillService.getSkills().subscribe( skills => {
      //   return this.skills = skills 
      // });
      
      this.listOfSkills = this.skillService.getSkills();
      
    }
    
    setActiveSkill(index) {
      this.currentFlipContainer = this.flipContainer._results[index].nativeElement;
      this.currentFlipElement = this.flipElement._results[index].nativeElement;
      
      //Subtracting the flip containers position from the parent, gives us the true position of the element.
      this.topPos = `${this.currentFlipContainer.getBoundingClientRect().top - this.currentFlipContainer.offsetParent.getBoundingClientRect().top}px`;
      this.leftPos = `${this.currentFlipContainer.getBoundingClientRect().left - this.currentFlipContainer.offsetParent.getBoundingClientRect().left}px`;
      
      //We set the top and left position to the true positions found above, so when the skill animates to full screen, it will animate from the original position
      this.renderer.setStyle(this.currentFlipElement, 'top', this.topPos);
      this.renderer.setStyle(this.currentFlipElement, 'left', this.leftPos)
      
    }
    // Push a search term into the observable stream.
    search(term: string): void {
      this.searchTerms.next(term);     
    }
    
    ngOnInit(): void {
      this.getSkills();
      
      this.skills = this.searchTerms
      .debounceTime(300)        
      .distinctUntilChanged()   
      .switchMap( term => {
        
        this.listOfSkills.subscribe( skill => {
          return <Skill> new Skill(skill)
        })
        
        return term.length === 0   
        
        ? this.listOfSkills
        
        //This should apply the filter.
        : []
        
      } )
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Skill[]>([]);
      });
      
    }
    
  }
  