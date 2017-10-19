import { Component } from '@angular/core';

import { Test } from 'services/tests/test';
import { TestService } from 'services/tests/test.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tech-tests',
  providers: [TestService],
  templateUrl: './tech-tests.component.html',
  styleUrls: ['./scss/tech-tests.scss']
})
export class TechTestsComponent {

  private techTests: Observable<Test[]>;


    constructor(
      private testService: TestService
    ) {}
  

  ngOnInit(): void {
      this.techTests = this.testService.getTests();    
  }
}
