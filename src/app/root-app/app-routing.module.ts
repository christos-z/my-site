import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TechTestComponent }   from 'app/tech-test/tech-test.component';
import { MySkillsComponent }    from 'app/my-skills/my-skills.component';
import { AboutMeComponent }    from 'app/about-me/about-me.component';

const routes: Routes = [
  { path: '', component: AboutMeComponent },
  { path: 'skills', component: MySkillsComponent },
  { path: 'tech-test',  component: TechTestComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
