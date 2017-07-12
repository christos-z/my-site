import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySkillsComponent } from './header.component';

describe('TechTestComponent', () => {
  let component: MySkillsComponent;
  let fixture: ComponentFixture<MySkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
