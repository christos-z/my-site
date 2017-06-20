import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTestComponent } from './tech-test.component';

describe('TechTestComponent', () => {
  let component: TechTestComponent;
  let fixture: ComponentFixture<TechTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
