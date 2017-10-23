import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { TechTestComponent } from './tech-test.component';

describe('TechTestComponent', () => {
  let component: TechTestComponent;
  let fixture: ComponentFixture<TechTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechTestComponent ],      
      imports: [
        HttpModule,
        RouterTestingModule
      ]
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
