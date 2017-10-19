import { Component } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'Welcome to my portfolio';
  
  // constructor(private router: Router) {
  //   router.events.subscribe((event: RouterEvent) => {
  //     this.navigationInterceptor(event)
  //   })
  // } 
  
  // navigationInterceptor(event: RouterEvent): void {
  //   console.log(event);
  // }
  
}