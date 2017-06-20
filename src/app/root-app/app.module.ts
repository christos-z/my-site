import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { TechTestComponent } from '../tech-test/tech-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TechTestComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
