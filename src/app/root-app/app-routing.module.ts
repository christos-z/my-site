import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TechTestComponent }   from 'app/tech-test/tech-test.component';
import { MySkillsComponent }    from 'app/my-skills/tech-test.component';

const routes: Routes = [
  { path: 'tech-test',  component: TechTestComponent },
  { path: '', component: MySkillsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
