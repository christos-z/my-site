import { Component, OnInit, ViewChildren, ElementRef, Renderer2} from '@angular/core';
import { Skill }                from 'services/skills/skill';
import { SkillService }         from 'services/skills/skill.service';

@Component({
  selector: 'my-skills',
  providers: [SkillService],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./css/my-skills.scss']
})


export class MySkillsComponent implements OnInit {
  //We need both the flip element and the flip container
  @ViewChildren('flipElement') flipElement;
  @ViewChildren('flipContainer') flipContainer;
  
  // skills: Skill[];
  skills;

  private topPos : String;
  private leftPos : String;
  
  private currentFlipContainer: any;
  private currentFlipElement: any;
  
  constructor(private renderer: Renderer2, private skillService: SkillService) {}
  
  getSkills(): void {
    this.skillService
    .getSkills()
    .subscribe(skills => this.skills = skills )
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
  
  ngOnInit() {
    this.getSkills();
  }
  
}
