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
  styles: [
    `iframe { 
      position: absolute; 
      width: 100%; 
      height: 100%; 
      margin: auto;
      left: 0;
      right: 0;
      border: none; 
    }`
  ]
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