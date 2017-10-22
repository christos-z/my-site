import { Component, Input } from '@angular/core';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: [
  './scss/about-me.scss',
  './scss/mediaQueries/homepage.scss']
})

export class AboutMeComponent {
  @Input()
  count: number = 1220;  

  private sillySkills = [
  {
    name: "Cups of tea drunk a day",
    type: "svg",
    icon: "tea",
    rank: 10       
  },
  {
    name: "Tea drinking ability",
    type: "progressBar",
    rank: 95      
  },
  {
    name: "Video Games Played",
    type: "progressBar",
    rank: 80    
  },
  {
    name: "BBQ Grilling skill",
    type: "progressBar",
    rank: 75    
  },
  {
    name: "BBQ Eating skill",
    type: "progressBar",
    rank: 90    
  },
  {
    name: "Beard growing skill",
    type: "progressBar",
    rank: 80    
  },
  {
    name: "Beard Length",
    type: "progressBar",
    rank: 50    
  },
  {
    name: "Beard Grooming skill",
    type: "progressBar",
    rank: 35    
  }
  ];
  
}