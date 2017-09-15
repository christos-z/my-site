import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TechTestComponent }   from 'app/tech-test/tech-test.component';
import { TechTestsComponent }   from 'app/tech-tests/tech-tests.component';
import { MySkillsComponent }    from 'app/my-skills/my-skills.component';
import { SkillComponent }    from 'app/skill/skill.component';
import { AboutMeComponent }    from 'app/about-me/about-me.component';

const routes: Routes = [
  { path: '', component: AboutMeComponent },
  { path: 'skills', component: MySkillsComponent },
  { path: 'skill/:skill-id', component: SkillComponent },
  { path: 'tech-test/:test-id',  component: TechTestComponent },
  { path: 'tech-tests',  component: TechTestsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
