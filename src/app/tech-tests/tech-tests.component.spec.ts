import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTestsComponent } from './tech-tests.component';

describe('TechTestsComponent', () => {
  let component: TechTestsComponent;
  let fixture: ComponentFixture<TechTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
