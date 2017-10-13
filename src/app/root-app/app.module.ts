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
import { TechTestsComponent } from 'app/tech-tests/tech-tests.component';
import { MySkillsComponent }    from 'app/my-skills/my-skills.component';
import { SkillComponent, SkillCardComponent, SkillSideMenuComponent }    from 'app/skill/skill.component';
import { AboutMeComponent } from "app/about-me/about-me.component";

//Common Imports
import { HeaderComponent }    from 'common/header/header.component';
import { SvgIconsComponent } from "common/svg-icons/svg-icons.component";

//Resolvers
import { SkillResolver } from 'resolvers/resolvers';
import { SkillService } from 'services/skills/skill.service';

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
    TechTestsComponent,
    AboutMeComponent,
    MySkillsComponent,
    SkillComponent, 
    SkillCardComponent, 
    SkillSideMenuComponent,
    SvgIconsComponent,
    HeaderComponent
  ],
  providers: [SkillResolver, SkillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
