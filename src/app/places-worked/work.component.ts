import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PlaceWorked } from 'services/places-worked/place-worked';
import { PlacesWorkedService } from 'services/places-worked/places-worked.service';
@Component({
  selector: 'skill',
  templateUrl: './work.component.html',
  styles: [
    `:host { 
      display: flex;
    }`
  ]
})

export class WorkComponent {
  public placeWorked: PlaceWorked;

  constructor(private placesWorkedService: PlacesWorkedService,
  public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getPlacesWorked();
  }

  getPlacesWorked(): void {
    this.placeWorked = this.activatedRoute.snapshot.data['placeWorked'];
    console.log(this.placeWorked);
  }

  changeActiveSkill(event) {
    console.log(event);
    this.placesWorkedService.getPlaceWorked(event).subscribe(placeWorked => this.placeWorked = placeWorked );
  }

}

@Component({
  selector: 'workCard',
  templateUrl: './work-card.component.html',
  styleUrls: ['./scss/skill.scss'],
})

export class WorkCardComponent {
  @Input() placeWorked: PlaceWorked;
}

@Component({
  selector: 'workSideMenu',
  templateUrl: './work-side-menu.component.html',
  styleUrls: ['./scss/skillNavbar.scss'],
})


export class WorkSideMenuComponent {
    
  @Input() currentSkill: PlaceWorked['company'];

  @Output() activeSkill: EventEmitter<PlaceWorked> = new EventEmitter<PlaceWorked>();

  private placesWorkedFromApi: Observable<PlaceWorked[]>;

  constructor(activatedRoute: ActivatedRoute, private placesWorkedService: PlacesWorkedService) {
  }

  ngOnInit(): void {
    this.placesWorkedFromApi = this.placesWorkedService.getPlacesWorked();
  }
  setActiveSkill (skillName): void {
    this.activeSkill.emit(skillName)
  }
}