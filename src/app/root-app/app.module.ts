import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent } from './app.component';
import { TechTestComponent } from 'app/tech-test/tech-test.component';
import { MySkillsComponent }    from 'app/my-skills/my-skills.component';
import { HeaderComponent }    from 'app/header/header.component';
import {AboutMeComponent} from "../about-me/about-me.component";

@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    AppComponent,
    TechTestComponent,
    AboutMeComponent,
    MySkillsComponent,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
