import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

//App module and routing
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent } from './app.component';

//App components imports
import { TechTestComponent } from 'app/tech-test/tech-test.component';
import { MySkillsComponent }    from 'app/my-skills/my-skills.component';
import { AboutMeComponent } from "app/about-me/about-me.component";

//Common Imports
import { HeaderComponent }    from 'common/header/header.component';
import { SvgIconsComponent } from "common/svg-icons/svg-icons.component";

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
    SvgIconsComponent,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
