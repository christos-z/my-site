import { Component } from '@angular/core'

import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

import { Test } from 'services/tests/test';
import { TestService } from 'services/tests/test.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tech-test',
  providers: [TestService],
  templateUrl: './tech-test.component.html',
  styleUrls: ['./scss/bootstrap.scss']
})

export class TechTestComponent {
    private test: Observable<Test>;
    private iframeUrl: SafeResourceUrl;

  constructor(
      private activatedRoute: ActivatedRoute,
      private domSanitizer : DomSanitizer,
      private testService: TestService
    ) {}
  
  
  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(params => {
      this.testService.getTest(params['test-id']).subscribe(techTest => {
        this.iframeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(techTest.testUrl)
      });
    })
    
  }
}