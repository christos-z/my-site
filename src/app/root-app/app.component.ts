import { Component } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`:host {
    font-family: 'roboto';
    background: #3d3d3d; margin: 100px auto;    padding: 0 20px;max-width: 1024px;
  }`]
})

export class AppComponent {
  title = 'Welcome to my portfolio';
}