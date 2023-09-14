import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { MeetingComponent } from './meeting/meeting.component';


@NgModule({
  declarations: [
    RoomsComponent,
    MeetingComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule
  ]
})
export class RoomsModule { }
