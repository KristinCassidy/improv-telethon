import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ClassSignUpComponent } from './class-sign-up/class-sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { CountDownComponent } from './count-down/count-down.component';
import { FollowComponent } from './follow/follow.component';
import { EventInfoComponent } from './event-info/event-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    ClassSignUpComponent,
    HomePageComponent,
    NavBarComponent,
    SponsorsComponent,
    CountDownComponent,
    FollowComponent,
    EventInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
