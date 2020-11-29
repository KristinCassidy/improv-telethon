import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ClassSignUpComponent } from './class-sign-up/class-sign-up.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { FollowComponent } from './follow/follow.component';
import { EventInfoComponent } from './event-info/event-info.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'class-sign-up', component: ClassSignUpComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'sponsors', component: SponsorsComponent},
  {path: 'follow-us', component: FollowComponent},
  {path: 'event-info', component: EventInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
